import React, { Component } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
// import Jumbotron from '../components/Jumbotron';

class CustomerPortal extends Component {
  render() {
      return(
        <div>  
          <Navbar />
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <a className="navbar-brand" href="./imgs/skillzblogo.png" alt="Logo">Skillz B Customer Portal</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="./customerportal">Customer Portal</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
         <li><a href="/dashboard"><span className="glyphicon glyphicon-log-in"></span> Login to Your Skillz B Dashboard </a></li>
        </ul>
      </div>
    </div>
    </nav>

    <div className="container-fluid text-center">    
    <div className="row content">
      <div className="col-sm-2 sidenav">
        <p><a href="/webdevelopment">Web Development</a></p>
        <p><a href="/webdesign">Web Design</a></p>
        <p><a href="/appdevelopment">Business Services</a></p>
      </div>
      <div className="col-sm-8 text-left"> 
        <h1>Welcome</h1>
        <p>Place job orders, track progress, manage your account, and more.</p>
      
      <div className="col-sm-2 sidenav">
        <div className="well">
          <p></p>
        </div>
        <div className="well">
          <p></p>
        </div>
        </div>
      </div>  
      </div>  
      </div>
          <Footer />

</div>
        );
    }
}

export default CustomerPortal;
