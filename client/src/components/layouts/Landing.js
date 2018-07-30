import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Landing = ({title}) => {
  <div>
    <h1>{title}</h1>

    </div>

}

export default class Landing extends Component {
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  
  render() {
    return (
      <div>
         <div className="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Skillz B
            </h1>
            <p className="lead">Find trusted, reliable, skilled Developers, Designers and Computer Technicians</p>
            <hr />
            <Link to="/register" className="btn btn-lg btn-info mr-2">Register</Link>
            <Link to="/login" className="btn btn-lg btn-light">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

