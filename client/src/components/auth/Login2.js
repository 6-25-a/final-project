import React from 'react';
import axios from 'axios';

class Login2 extends React.Component {
  render() {
   
  }
    
  login() {
    axios.post('/api/users/login2', this.state).then(() => {
      alert('success')
    }).catch((err) => {
      console.log('error')
    })
  }
}
export default Login2;