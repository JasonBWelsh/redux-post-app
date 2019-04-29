import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state=initialState, action) {
    switch(action.type) {

        case FETCH_POSTS: {
            console.log('DRD __ inside reducer in `FETCH_POSTS` case logging');
            return {
                ...state,
                items: action.payload
            }
        }

        case NEW_POST: {
            console.log('DRD __ inside reducer in `NEW_POST` case');
            return {
                ...state,
                item: action.payload
            }
        }
        default: 
            return state;
    }
}