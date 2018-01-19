import React, { Component } from 'react';

export default class SignOut extends Component {

  componentDidMount() {
    if (!localStorage.getItem('token')) return alert('Not signed in');
    localStorage.clear('token');
    this.props.history.push('/sign-in');
  }
  render() {
    return (
      <div></div>
    );
  }
}