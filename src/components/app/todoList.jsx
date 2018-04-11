import React from 'react';
import TodoItem from './todoList/todoItem';

class TodoList extends React.Component {
  render () { // RENDERING COMPONENTS (TodoItem) AND PROPS (label="") see also todoitem.jsx
    return (
      <ol className='todo-list'>
        <TodoItem label='First task' />
        <TodoItem label='Second task' />
        <TodoItem label='Third task' />
      </ol>
    );
  }
}
export default TodoList;
