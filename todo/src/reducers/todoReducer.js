import  { ADD_TODO } from '../actions/types';

const initialState = {
        todos: [
            {
                value: 'walk the dog',
                completed: false
            }
        ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: action.payload
            }
        default: 
        return state;
    }
}