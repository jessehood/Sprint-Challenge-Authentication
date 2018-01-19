import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Jokes from './components/Jokes';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={Jokes} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-out" component={SignOut} />
          </div>
        </Router>
    );
  }
}

export default App;
