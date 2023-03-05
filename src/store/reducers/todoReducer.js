import { TODO_FETCH_DONE, DELETE_TODO } from "../actions/actionType";

const inst = {
  data: [],
};

function todoReducer(state = inst, action) {
  switch (action.type) {
    case TODO_FETCH_DONE:
      return { ...state, data: action.payload };
    case DELETE_TODO:
      const filterData = state.data.filter((el) => {
        return el.id !== action.payload;
      });
      // console.log({ ...state, data: [filterData] });
      return {
        ...state,
        data: filterData,
      };
    default:
      return state;
  }
}

export default todoReducer;
