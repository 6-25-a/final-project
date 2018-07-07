import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron';

class About extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="About"  subtitle="Who we are and what we do." />
            <div className='container'>
            <p>TEST</p>
                    
            </div>
            <Footer />
        </div>
        );
    }
}
export default About
