/* EXAMPLE FOR CLASSES
class Something {
  constructor () {
    console.log('ok');
  }
}

export default Something; // NO, NO SENOR!!!: export.modules = Something
*/
import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/createItem';

class App extends React.Component {
  render () { // RENDERING COMPONENTS (TodoListWrapper) see also todoitem.jsx
    return (
      <div className='todoListWrapper'>
        <TodoList />
        <CreateItem />
      </div>
    );
  }
}
export default App;
