import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Signup extends React.Component {
 
  render() {
    return (
      <div>
        <input name="email" onChange={(e) => this.setValue(e)} />
        <input name="password" onChange={(e) => this.setValue(e)} />
        <button onClick={() => this.signup()}>submit</button>
      </div>
    )
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value})
  }
    
  signup() {
    axios.post('api/users/register', this.state).then((res) => {
      localStorage.setItem('auth_token', res.data.token);
    }).catch((err) => {
      console.log('error')
    })
  }
}

export default Signup;
