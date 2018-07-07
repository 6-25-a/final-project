import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
         <div> 
              <div className="overlay">
                <div className="jumbotron jumbotron-fluid">   
                    <div className="container">
                    <h1 className="display-4">{this.props.title}</h1>
                    <p className="lead">{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Jumbotron;