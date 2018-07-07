import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
         
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal text-dark"><a href="/">SkillzB</a></h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark"  href="/a ut">About</a>
                    <a className="p-2 text-dark"  href="/services">Services Offered</a>
                    <a className="p-2 text-dark"  href="/customerservices">Customer Portal</a>
                    <a className="p-2 text-dark" href="/providerservices">Provider Portal</a>
                    <a className="p-2 text-dark" href="/contact">Contact Us</a>
      </nav>
            <a className="btn btn-outline-primary" href="/services">Learn more</a>
            </div>

        );
    }
}

export default Navbar;