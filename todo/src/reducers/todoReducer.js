import  { ADD_TODO } from '../actions/types';

const initialState = {
    todos: [],
    todo: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload
            }
        default: 
        return state;
    }
}