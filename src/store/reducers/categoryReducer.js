import { CATEGORY_FETCH_DONE } from "../actions/actionType";

const inst = {
  category: [],
};

function categoryReducer(state = inst, action) {
  switch (action.type) {
    case CATEGORY_FETCH_DONE:
      // console.log(action, 'action')
      return { ...state, category: action.payload };
    default:
      return state;
  }
}

export default categoryReducer;

