import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isRed: false}; // state is an object, a map (js object, key-value pairs).
  }

  changeColor () {
    this.setState({isRed: !this.state.isRed});
  }

  render () { // RENDERING PROPS ({this.props.label}) see also firstComponent.jsx
    return (
      <li onClick={this.changeColor.bind(this)}
        style={{color: (this.state.isRed ? 'red' : '')}}>{this.props.label}</li>
    );
  }
}
export default TodoItem;
