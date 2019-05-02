import { NEW_POST } from "../actions/types";
import { FETCH_POSTS_ASYNC } from '../sagas/saga';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
    console.log('DRD-5 inside reducer');
    console.log('DRD-5-A inside reducer logging `action`:::', action);
  switch (action.type) {
    case FETCH_POSTS_ASYNC: {
      console.log("DRD __ inside reducer in `FETCH_POSTS` case logging");
      return {
        ...state,
        items: action.payload
      };
    }

    case NEW_POST: {
      console.log("DRD __ inside reducer in `NEW_POST` case");
     
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    }
    default:
      return state;
  }
}
