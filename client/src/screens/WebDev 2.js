import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron';

import './WebDev.css';

class WebDev extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="Web Development Services" subtitle="" />
            <div className='container'>
    
                    
            </div>
            <Footer />
        </div>
        );
    }
}
export default WebDev
