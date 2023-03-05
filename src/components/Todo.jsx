import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { fetchTodos } from "../store/actions";

function Todo() {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos("http://localhost:3000/todo"));
  }, [dispatch]);

  const [todo, setTodo] = useState({
    title: "",
    status: "",
  });

  const handleChange = (event) => {
    const { title, value } = event.target;
    setTodo({
      ...todo,
      [title]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(todo),
      });
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
      dispatch(fetchTodos("http://localhost:3000/todo"));
      setTodo({
        title: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  async function checkValue(event, i) {
    const todo = data.data.todos[event.target.value];
    if (todo.status == 0) {
      event.preventDefault();
      try {
        const res = await fetch(
          "http://localhost:3000/todo/status/" + todo._id,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              access_token: localStorage.getItem("access_token"),
            },
            body: JSON.stringify({
              status: 1,
            }),
          }
        );
        if (!res.ok) throw "Internal Server Error!";
        await res.json();
        dispatch(fetchTodos("http://localhost:3000/todo"));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <h1 style={{fontWeight: 'bold'}}>All Tasks</h1>
      <form style={{ display: "inline" }} onSubmit={handleSubmit}>
        <input title="title" value={todo.title} onChange={handleChange} style={{ borderRadius: '5px', border: '#eee', background: 'lightgrey', display: 'inline-block', width: '100%', padding: '.5rem' }} type="text" placeholder="Add a new task"></input>
      </form>
      <br />
      <br />
      <ol style={{ listStyleType: "none", paddingLeft: 0 }}>
        {data?.data?.todos?.map((el, i) => {
          return (
            <li key={el._id}>
              <input type="checkbox" checked={el.status == 1} name={el._id} value={i} onChange={checkValue}
                style={{
                  marginRight: "10px",
                  verticalAlign: 'middle',
                  width: '1.3rem',
                  height: '1.3rem',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  border: '1px solid red',
                  outline: 'red',
                  cursor: 'pointer'
                }}></input>
              <span style={{ textDecoration: el.status == 1 ? "line-through" : "", color: el.status == 1 ? 'red' : '' }}>
                {el.title}
              </span>
              {/* <span style={{ marginLeft: "15px" }}>{el.categoryId.name}</span> */}
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Todo;
