import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { fetchCategorys } from "../store/actions";

function Category() {
  const data = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategorys("http://localhost:3000/category"));
  }, [dispatch]);

  const [category, setCategory] = useState({
    name: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/category", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(category),
      });
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
      dispatch(fetchCategorys("http://localhost:3000/category"));
      setCategory({
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{fontWeight: 'bold'}}>All Category</h1>
      <ol style={{ listStyleType: "none", paddingLeft: 0 }}>
        {data?.category?.categories?.map((el) => {
          return <li style={{lineHeight: '2'}} key={el._id}>{el.name}</li>;
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={category.name}
          onChange={handleChange}
          type="text"
          placeholder="+ New Category"
        ></input>
      </form>
    </>
  );
}

export default Category;
