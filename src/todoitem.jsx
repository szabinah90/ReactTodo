import React from 'react';

class TodoItem extends React.Component {
  render () { // RENDERING PROPS ({this.props.label}) see also firstComponent.jsx
    return (
      <li>{this.props.label}</li>
    );
  }
}
export default TodoItem;
