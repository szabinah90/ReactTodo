/* EXAMPLE FOR CLASSES
class Something {
  constructor () {
    console.log('ok');
  }
}

export default Something; // NO, NO SENOR!!!: export.modules = Something
*/
import React from 'react';
import TodoItem from './todoitem';

class App extends React.Component {
  render () { // RENDERING COMPONENTS (TodoItem) AND PROPS (label="") see also todoitem.jsx
    return (
      <ul>
        <TodoItem label='First task' />
        <TodoItem label='Second task' />
        <TodoItem label='Third task' />
      </ul>
    );
  }
}
export default App;
