import {
  TODO_FETCH_DONE,
  CATEGORY_FETCH_DONE,
  DELETE_TODO,
} from "./actionType";

function fetchTodo(payload) {
  return {
    type: TODO_FETCH_DONE,
    payload,
  };
}

function fetchCategory(payload) {
  return {
    type: CATEGORY_FETCH_DONE,
    payload,
  };
}

export function fetchTodos(useUrl) {
  return async (dispatch) => {
    try {
      const res = await fetch(useUrl, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!res.ok) throw "Internal Server Error!";
      const data = await res.json();
      dispatch(fetchTodo(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchCategorys(useUrl) {
  return async (dispatch) => {
    try {
      const res = await fetch(useUrl, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!res.ok) throw "Internal Server Error!";
      const data = await res.json();
      dispatch(fetchCategory(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addCategory(useUrl, form) {
  return async (dispatch) => {
    try {
      const res = await fetch(useUrl, {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
    } catch (error) {
      console.log(error);
    }
  };
}

export function addTodo(useUrl, form) {
  return async (dispatch) => {
    try {
      const res = await fetch(useUrl, {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
      dispatch(fetchTodos("http://localhost:3000/"));
    } catch (error) {
      console.log(error);
    }
  };
}

export function editTodo(useUrl, form, id) {
  return async (dispatch) => {
    try {
      const res = await fetch(useUrl + `/${id}`, {
        body: JSON.stringify(form),
        method: "PUT",
        headers: {
          "content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
    } catch (error) {
      console.log(error);
    }
  };
}

function creatorDelete(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function deleteTodo(useUrl, id) {
  return async (dispatch) => {
    try {
      const res = await fetch(useUrl + `/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
      dispatch(creatorDelete(id));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteCategory(useUrl, id) {
  return async (dispatch) => {
    try {
      const res = await fetch(useUrl + `/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
      dispatch(creatorDelete(id));
    } catch (error) {
      console.log(error);
    }
  };
}