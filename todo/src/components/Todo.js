import React, { Component } from 'react';
import { toggleTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class Todo extends Component {
    
    toggleTodo(e) {
        e.preventDefault();
        this.props.toggleTodo(this.props.index)
    };

    render() {
        return (
            <ul>
                <li onClick={toggleTodo}>
                    {this.props.todo.value}
                </li>
            </ul>
        );
    }
}

export default connect(null, { toggleTodo })(Todo);