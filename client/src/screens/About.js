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
            <h2>About SkillzB</h2>
            <p>The idea for SkillzB was birthed in order to help highly skilled individuals who lack real world work experience within his/her repective field gain practical work experience to build their resume and/or portfolio, and have an income.</p><br/>
            <p></p>

            </div>
            <Footer />
        </div>
        );
    }
}
export default About
