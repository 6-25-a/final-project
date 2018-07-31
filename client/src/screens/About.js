import React from 'react';
// import Navbar from '../components/layouts/Navbar';
// import Footer from '../components/layouts/Footer';
// import Jumbotron from '../components/Jumbotron';

// const About = () => <Navbar title="About" />;

class About extends React.Component {
    render() {
        return(
          <div>
            <h1 title="About"  subtitle="Who we are and what we do.">About Skillz B </h1>
            <div className='container'>
            <h2>About SkillzB</h2>
            <p>The idea for SkillzB was birthed in order to help highly skilled individuals who lack real world work experience within his/her repective field gain practical work experience to build their resume and/or portfolio, and have an income.</p><br/>
            <p></p>

            </div>
        </div>
        );
    }
}
export default About;
