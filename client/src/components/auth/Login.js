import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input name="email" onChange={(e) => this.setValue(e)} />
        <input name="password" onChange={(e) => this.setValue(e)} />
        <button onClick={() => this.login()}>submit</button>
      </div>
    )
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  login() {
    axios.post('/api/users/login', this.state).then((res) => {
      console.log(res);
      localStorage.setItem('auth_token', res.data.token);
    }).catch((err) => {
      console.log('error')
    })
  }
}


export default Login;