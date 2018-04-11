import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isDone: false}; // state is an object, a map (js object, key-value pairs).
  }

  changeDone () {
    this.setState({isDone: !this.state.isDone});
  }

  render () { // RENDERING PROPS ({this.props.label}) see also firstComponent.jsx
    return (
      <li onClick={this.changeDone.bind(this)}
        style={{color: (this.state.isDone ? 'red' : '')}}>{this.props.label}</li>
    );
  }
}
export default TodoItem;
