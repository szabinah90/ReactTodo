/* EXAMPLE FOR CLASSES
class Something {
  constructor () {
    console.log('ok');
  }
}

export default Something; // NO, NO SENOR!!!: export.modules = Something
*/
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/createItem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toDos: [
        { label: 'First task' },
        { label: 'Second task' },
        { label: 'Third task' },
        { label: 'Fourth task' },
        { label: 'Fifth task' }
      ]
    };
  }

  submit (inputValue) {
    let toDosArray = this.state.toDos;
    toDosArray.push({ label: inputValue });
    this.setState({ toDos: toDosArray });
    console.log(inputValue);
  }

  delete (label) {
    setTimeout(() => {
      let toDosArray = this.state.toDos;
      let i = 0;
      while (i < toDosArray.length && label !== toDosArray[i].label) {
        i++;
      }
      if (i < toDosArray.length) {
        toDosArray.splice(i, 1);
        this.setState({ toDos: toDosArray });
      }
    }, 1500);
  }

  render () { // RENDERING COMPONENTS (TodoListWrapper) see also todoitem.jsx
    return (
      <div className='todoListWrapper'>
        <Jumbotron bsClass='my-jumbotron'>
          <h1>Organize Your Life!</h1>
        </Jumbotron>
        <TodoList toDos={this.state.toDos} delete={this.delete.bind(this)} />
        <CreateItem submit={this.submit.bind(this)} />
        <ModalFooter>
          <p>Szabina Házi, Flow Academy © 2018.</p>
        </ModalFooter>
      </div>
    );
  }
}
export default App;
