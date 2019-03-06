import React, { Component } from 'react';
import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
        };
    }

    onSubmit = e => {
        e.preventDefault();
        const todo = {
            value: this.state.newTodo,
            completed: false
        }
        this.props.addTodo(todo)

        this.setState({
            newTodo: ''
        })
    }
    

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Todo: </label><br />
                        <input 
                            name="newTodo" 
                            type="text" 
                            onChange={this.onChange} 
                            value={this.state.newTodo} />
                    </div>
                    <br />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addTodo})(TodoForm);