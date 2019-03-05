import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class Todos extends Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.newTodo) {
            this.props.todos.unshift(nextProps.newTodo);
        }
    };

    render() {
        const todoItems = this.props.todos.map(todo => (
            <ul key={todo.id}>
                <li>{todo.value}</li>
            </ul>
        ))
        return (
            <div>
                <h1>Todos</h1>
                {todoItems}
            </div>
        );
    }
}

Todos.propTypes = {
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    newTodo: PropTypes.object
}

const mapStateToProps = state => ({
    todos: state.todos.value,
    newTodo: state.todo
})

export default connect(mapStateToProps, { addTodo })(Todos);