import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';

class ContactForm extends React.Component {
  render () {
    return (
      <form>
        <p> If you have  any questions, feel free to contact me! </p>
        <input className='my-input-field' type='text' placeholder='Your name' /> <br />
        <input className='my-input-field' type='email' placeholder='Your e-mail address' /> <br />
        <textarea className='my-text-area' rows='5' cols='50' placeholder='Write your message here.' /> <br />
        <Link to='/thankyou'>
          <Button bsStyle='warning' bsSize='large' type='button'>Send</Button>
        </Link>
      </form>
    );
  }
}

export default ContactForm;
