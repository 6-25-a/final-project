import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron';
class BusinessServices extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="Business Services" subtitle="Find trusted, reliable, highly-skilled technical" />
            <div className='container'>
            <p>TEST</p>
                    
                    
            </div>
            <Footer />
        </div>
        );
    }
}
export default BusinessServices
