import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar.js';
import Footer from '../components/layouts/Footer.js';
import Jumbotron from '../components/Jumbotron';
import './Home.css';

class Home extends Component {
    render() {
        return(
          <div>
            <Navbar />
            <Jumbotron title="Welcome to SkillzB" subtitle="Find trusted, reliable, highly-skilled independent providers" />
            <div className='container'>
              <p>
              <a href="./views/providerportal" className="btn btn-primary my-2">For Providers</a>
              <a href="./views/customerportal" className="btn btn-secondary my-2">For Customers</a>
              </p>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-3">
              <h1 className="my-4">Skillz B</h1>
              <div className="list-group">
                <a href="./WebDes.js" className="list-group-item">Web Design</a>
                <a href="./WebDev.js" className="list-group-item">Web Development</a>
                <a href="./WebDev" className="list-group-item">App Development</a>
                </div>
              </div>

              <div className="col-lg-9">
                <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                    </div>
                    <div className="carousel-item">
                    </div>
                    <div className="carousel-item">
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="./customerservices">Web Development</a>
                        </h4>
                        <h5>Web Development Services</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="./customerservices">App Development</a>
                        </h4>
                        <h5>Business Services</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="./customerservices">Web Design</a>
                        </h4>
                        <h5>Web Design</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                      </div>
                    </div>
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

export default Home;



