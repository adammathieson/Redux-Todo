import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        };

        
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        const todo = {
            value: this.state.todo,
            completed: false
        };
        
        this.props.addTodo(todo)

    }
    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Todo: </label><br />
                        <input 
                            name="todo" 
                            type="text" 
                            onChange={this.onChange} 
                            value={this.state.todo} />
                    </div>
                    <br />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;