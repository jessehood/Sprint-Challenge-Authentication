import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

class Jokes extends Component {
  state = {
    jokes: []
  }
  async componentDidMount() {
    const response = await this.props.getJokes();
    if (response.type === 'GET_JOKES') this.setState({jokes: response.payload});
  }

  render() {
    if (!this.state.jokes.length) return <div>Not authorized</div>
    return (
      <div>
        {this.state.jokes.map((joke,i) => {
          return (
            <div key={'joke' + i}>
              <div><b>{joke.setup}</b></div>
              <div>{joke.punchline}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(null, { getJokes })(Jokes);