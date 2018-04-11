import React from 'react';
import TodoItem from './todoList/todoItem';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {toDos: [
      {label: 'First task'},
      {label: 'Second task'},
      {label: 'Third task'},
      {label: 'Fourth task'},
      {label: 'Fifth task'}
    ]};
  }

  render () { // RENDERING COMPONENTS (TodoItem) AND PROPS (label="") see also todoitem.jsx
    let toDos = this.state.toDos.map(element => {
      return <TodoItem label={element.label} key={element.label} />;
    });
    return (
      <ol className='todo-list'>
        {toDos}
      </ol>
    );
  }
}
export default TodoList;
