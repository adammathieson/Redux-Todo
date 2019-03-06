import  { ADD_TODO, TOGGLE_TODO } from '../actions/types';

const initialState = {
        todos: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [ ...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if(index === action.payload) {
                        return {...todo, completed: !todo.completed}
                        console.log('toDone')
                    }

                    return todo;
                    
                })
            }
        default: 
        return state;
    }
}