import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';


import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import store from './store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoForm />
          <hr />
          <Todos />
        </div>
      </Provider>
    );
  }
}

export default App;
