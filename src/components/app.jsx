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

class App extends React.Component {
  render () { // RENDERING COMPONENTS (TodoListWrapper) see also todoitem.jsx
    return (
      <div className='todoListWrapper'>
        <TodoList />
      </div>
    );
  }
}
export default App;
