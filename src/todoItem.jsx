import React from 'react';

class TodoItem extends React.Component {
  changeColor () {
    console.log('Change.');
  }

  render () { // RENDERING PROPS ({this.props.label}) see also firstComponent.jsx
    return (
      <li onClick={this.changeColor}>{this.props.label}</li>
    );
  }
}
export default TodoItem;
