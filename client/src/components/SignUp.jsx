import React, { Component } from 'react';
import { formToJson } from '../helpers';
import { connect } from 'react-redux';
import { signUp } from '../actions';

class SignIn extends Component {

  async handleFormSubmit(e) {
    e.preventDefault();
    const data = formToJson(e.target);
    const result = await this.props.signUp(data);
    if (result.type === 'SIGN_UP_ERROR') {
      console.log(result);
      return alert('User already exists.');
    } else {
      this.props.history.push('/sign-in');
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

export default connect(null, { signUp })(SignIn);