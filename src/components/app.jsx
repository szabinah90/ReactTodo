import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import React from 'react';
import Navigation from './app/navbar';
import TodoIndex from './app/todoIndex';
import ContactIndex from './app/contactIndex';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='todoListWrapper'>
          <Jumbotron bsClass='my-jumbotron' />
          <Navigation />
          <div>
            <Route path='/todos' component={TodoIndex} />
            <Route path='/contact' component={ContactIndex} />
          </div>
          <ModalFooter>
            <p>Szabina Házi, Flow Academy © 2018.</p>
          </ModalFooter>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
