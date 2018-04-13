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

  submit (inputValue) {
    let toDosArray = this.state.toDos;
    toDosArray.push({label: inputValue});
    this.setState({toDos: toDosArray});
    console.log(inputValue);
  }

  delete (label) {
    let toDosArray = this.state.toDos;
    let i = 0;
    while (i < toDosArray.length && label !== toDosArray[i].label) {
      i++;
    }
    if (i < toDosArray.length) {
      toDosArray.splice(i, 1);
      this.setState({toDos: toDosArray});
    }
  }

  render () { // RENDERING COMPONENTS (TodoListWrapper) see also todoitem.jsx
    console.log(this.state);
    return (
      <div className='todoListWrapper'>
        <h2>ToDo List</h2>
        <TodoList toDos={this.state.toDos} delete={this.delete.bind(this)} />
        <CreateItem submit={this.submit.bind(this)} />
      </div>
    );
  }
}
export default App;
