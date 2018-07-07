import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron';
class CustomerSignup extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="Customer Signup" subtitle="Please complete registration form." />
            <div className='container'>
            <p>TEST</p>
                    
            </div>
            <Footer />
        </div>
        );
    }
}
export default CustomerSignup
