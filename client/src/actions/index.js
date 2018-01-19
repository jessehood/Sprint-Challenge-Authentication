import axios from 'axios';
const server = 'http://localhost:5000/api';

export async function signIn(userData) {
  try {
    const response = await axios.post(server + '/login', userData);
    return {
      type: 'SIGN_IN',
      payload: response.data
    }
  } catch(err) {
    return {
      type: 'SIGN_IN_ERROR',
      payload: err.response.data
    }
  }
}

export async function signUp(userData) {
  try {
    const response = await axios.post(server + '/users', userData);
    return {
      type: 'SIGN_UP',
      payload: response.data
    }
  } catch(err) {
    return {
      type: 'SIGN_UP_ERROR',
      payload: err.response.data
    }
  }
}

export async function getJokes() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(server + '/jokes', {headers: {Authorization: token}});
    return {
      type: 'GET_JOKES',
      payload: response.data
    }
  } catch(err) {
    return {
      type: 'GET_JOKES_ERROR',
      payload: err.response.data
    }
  }
}

export function signOut() {

}