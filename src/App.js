import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Todos from './components/Todos';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state={
    todos:[]
  }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=>this.setState({todos:res.data}))
  }

  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}));
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => {
        res.data.id=uuid();
        this.setState({ todos: [...this.state.todos, res.data] })
        });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo 
                  addTodo={this.addTodo}
                />
                <Todos 
                  todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
