import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
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