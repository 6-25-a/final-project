import React, { Component } from 'react'
import { axios } from 'axios';
import classnames from 'classnames'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Signup = ({title}) => {
  <div>
    <h1>{title}</h1>
    <a href="/"> Home </a>
    <a href="/pages/about"> About </a>
    <a href="/pages/providerportal"> Provider Portal </a>
    <a href="/pages/customerportal"> Customer Portal </a>
    </div>

}
// import register from '../../registerServiceWorker';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      telephone: '',
      cellphone: '',
      errors: {},

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      telephone: this.state.telephone,
      cellphone: this.state.cellphone,
      type: 'customer'
    };

    console.log(newUser)

    axios.post('/api/users/register', newUser).then((res) => {
      console.log(res)
      alert('success!')
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Register</h1>
            <p className="lead text-center">Create your Skillz B account</p>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="text" className={classnames("form-control form-control-lg", {
                  'is-invalid': errors.name
                })} placeholder="Name" name="name" 
                value={this.state.name}
                onChange={this.onChange}
                />
                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
              </div>
              <div className="form-group">
                <input type="email" className={classnames("form-control form-control-lg", {
                  'is-invalid': errors.email
                })} 
                placeholder="Email Address" name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>)}
                <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
              </div>
              <div className="form-group">
                <input type="password" className={classnames("form-control form-control-lg", {
                  'is-invalid': errors.password
                })} placeholder="Password" name="password" 
                value={this.state.password}
                onChange={this.onChange}
                />
                 {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
              </div>
              <div className="form-group">
                <input type="password" className={classnames("form-control form-control-lg", {
                  'is-invalid': errors.password2
                })} placeholder="Confirm Password" name="password2"
                value={this.state.password2}
                onChange={this.onChange}
                />
                {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
              </div>
              <div className="form-group">
                <input type="tele" className={classnames("form-control form-control-lg", {
                  'is-invalid': errors.tele
                })} placeholder="Confirm tele" name="tele"
                value={this.state.tele}
                onChange={this.onChange}
                />
                {errors.tele && (<div className="invalid-feedback">{errors.tele}</div>)}
              </div>
              <div className="form-group">
                <input type="cellphone" className={classnames("form-control form-control-lg", {
                  'is-invalid': errors.cellphone
                })} placeholder="Confirm cellphone" name="cellphone"
                value={this.state.cellphone}
                onChange={this.onChange}
                />
                {errors.cellphone && (<div className="invalid-feedback">{errors.cellphone}</div>)}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  
    )
  }
}
export default Signup;
