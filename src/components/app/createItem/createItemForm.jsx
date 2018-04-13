import React from 'react';

class CreateItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {inputValue: ''};
  }

  submit () {
    console.log('Submit successful!', this.state.inputValue);
    this.props.submit(this.state.inputValue);
  }

  changeInputValue (element) {
    this.setState({inputValue: element.target.value});
  }

  render () {
    return (
      <form>
        <input type='text' placeholder='Add to your list' value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} />
        <button type='button' onClick={this.submit.bind(this)}>Add</button>
        <br />
      </form>
    );
  }
}

export default CreateItemForm;
