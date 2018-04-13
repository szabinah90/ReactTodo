import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isDone: false}; // state is an object, a map (js object, key-value pairs).
  }

  delete () {
    this.props.delete(this.props.toDo.label);
  }

  changeDone () {
    this.setState({ isDone: !this.state.isDone });
    if (this.state.isDone === true) {
      this.delete();
    }
  }

  render () { // RENDERING PROPS ({this.props.label}) see also firstComponent.jsx
    return (
      <li style={{color: (this.state.isDone ? 'grey' : '')}}>
        <button type='button' onClick={this.delete.bind(this)}>R</button>
        {this.props.toDo.label}
      </li>
    );
  }
}
export default TodoItem;
