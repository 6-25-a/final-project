import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron';
class CustomerLogin extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="Customer Login" subtitle="Please enter login information here." />
            <div className='container'>
            <p>TEST</p>
                    
            </div>
            <Footer />
        </div>
        );
    }
}
export default CustomerLogin
