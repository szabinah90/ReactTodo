import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';

class ThankYou extends React.Component {
  render () {
    return (
      <form>
        <p>Thank you for sending a message! You will get a reply ASAP.</p> <br />
        <Link to='/todos'>
          <Button bsStyle='warning' bsSize='large' type='button'>Back to Your List</Button>
        </Link>
      </form>
    );
  }
}
export default ThankYou;
