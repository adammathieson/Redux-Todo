import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

import Todo from './Todo';

class Todos extends Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.todo) {
            this.props.todos.unshift(nextProps.todo);
        }
    };

    render() {
        return (
            <div>
                <h1>Todos</h1>
                {this.props.todos.map((todo, index) => 
                    <Todo todo={todo} index={index} key={index} />
                )}
            </div>
        );
    }
}

Todos.propTypes = {
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    todo: PropTypes.object
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(Todos);