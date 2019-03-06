import React, { Component } from 'react';
import { toggleTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class Todo extends Component {

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index)
        console.log('toggle')
    };

    render() {
        return (
            <ul>
                <li onClick={this.toggleTodo}>
                    {this.props.todo.value}
                </li>
            </ul>
        );
    }
}

export default connect(null, { toggleTodo })(Todo);