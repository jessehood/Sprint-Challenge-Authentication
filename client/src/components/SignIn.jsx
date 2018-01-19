import React, { Component } from 'react';
import { formToJson } from '../helpers';
import { connect } from 'react-redux';
import { signIn } from '../actions';

class SignIn extends Component {

  async handleFormSubmit(e) {
    e.preventDefault();
    const data = formToJson(e.target);
    console.log(data);
    const response = await this.props.signIn(data);
    if (response.type === 'SIGN_IN_ERROR') {
      return alert('Invalid username and/or password');
    } else {
      localStorage.setItem('token', response.payload.token);
      this.props.history.push('/');
    }
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <fieldset>
          <label>Username: </label>
          <input name="username" />
        </fieldset>
        <fieldset>
          <label>Password: </label>
          <input type="password" name="password" />
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
    );
  }
}

export default connect(null, { signIn })(SignIn);