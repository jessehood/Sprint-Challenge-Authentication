import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <div>
        <span>
          <Link to="/">Jokes</Link> | 
        </span>
        <span>
          {" "}<Link to="/sign-up">Sign Up</Link> |
        </span>
        <span>
          {" "}<Link to="/sign-in">Sign In</Link> |
        </span>
        <span>
          {" "}<Link to="/sign-out">Sign Out</Link>
        </span>
    </div>
    );
  }
}