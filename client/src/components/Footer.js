
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
         <div> 
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">SkillzB  &#169; {new Date().getFullYear()}</span>
                            <p className="float-right">
                            <a href="/">Back to top</a>
                            </p>   
                    
                </div>
            </footer>
        </div>
        );
    }
}

export default Footer;