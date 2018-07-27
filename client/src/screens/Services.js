import React, { Component } from 'react';
// import  { Link } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar.js';
import Footer from '../components/layouts/Footer.js';
import Jumbotron from '../components/Jumbotron';

import './Services.css';

class Services extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="Service Categories" subtitle="Our services and our providers.." />
            <div className='container'>
           
                    
            </div>
            <Footer />
        </div>
        );
    }
}
export default Services