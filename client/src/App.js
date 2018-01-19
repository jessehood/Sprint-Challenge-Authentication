import React, { Component } from 'react';
import redux from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Jokes from './components/Jokes';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route path="/" exact component={Jokes} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </div>
        </Router>
    );
  }
}

export default App;
