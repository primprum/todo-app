import React, { Component } from 'react'
import Todos from './components/Todos'

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Clean the room',
        completed: false
      },
      {
        id: 3,
        title: 'Write some code',
        completed: false
      }
    ]
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}
