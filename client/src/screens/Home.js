import React, { Component } from 'react';
// import  { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron';

class Home extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="Welcome to SkillzB" subtitle="Find trusted, reliable, highly-skilled technical" />
            <div className='container'>
                    <p>
                    <a href="/providerservices" className="btn btn-primary my-2">For Providers</a>
                    <a href="/customerservices" className="btn btn-secondary my-2">For Customers</a>
                </p>
                </div>
                <div className="album py-5 bg-light">
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top card1" data-src="./imgs/mbsml.jpeg/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Web Development and Web Design" />
                        <div className="card-body">
                        <p className="card-text">Web Developers</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top card2" data-src="./imgs/business.jpeg/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Business" />
                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top card3" data-src=""  alt="Computers" />
                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
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
export default Home


