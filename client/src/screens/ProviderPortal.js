import React, { Component } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
// import Jumbotron from '../components/Jumbotron';

class ProviderPortal extends Component {
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
          <a className="navbar-brand" href="./imgs/skillzblogo.png" alt="logo">Skillz B Provider Portal</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="./providerportal">Provider Portal</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
         <li><a href="/dashboard"><span className="glyphicon glyphicon-log-in"></span> Login to Your Provider Dashboard </a></li>
        </ul>
      </div>
    </div>
    </nav>

    <div className="container-fluid text-center">    
    <div className="row content">
      <div className="col-sm-2 sidenav">
        <p><a href="/">HOME</a></p>
        <p><a href="/">Link</a></p>
        <p><a href="/">Link</a></p>
      </div>
      <div className="col-sm-8 text-left"> 
        <h1>Welcome</h1>
        <p>Track registration progress, add skills and education, view earnings and more.</p>
      
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
export default ProviderPortal;
