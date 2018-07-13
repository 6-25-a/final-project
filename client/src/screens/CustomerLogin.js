import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron';
class CustomerLogin extends Component {
    render() {
        return(
          <div>  
            <Navbar />
            <Jumbotron title="Customer Login" subtitle="Please enter login information here." />
            <div className='container'>
            <p>TEST</p>
                    
            </div>
            <Footer />
        </div>
        );
    }
}
export default CustomerLogin
import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      registerError: '',
      logInError: ''
    };
  }  

  componentDidMount() {

  }

      /* GET */
    // fetch('/api/counters')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       counters: json
    //     });
    //   });


  newCounter() {
      /* POST */
    // fetch('/api/counters', { method: 'POST' })
    //   .then(res => res.json())
    //   .then(json => {
    //     let data = this.state.counters;
    //     data.push(json);

    //     this.setState({
    //       counters: data
    //     });
    //   });
  }

  incrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  decrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  deleteCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}`, { method: 'DELETE' })
      .then(_ => {
        this._modifyCounter(index, null);
      });
  }

  _modifyCounter(index, data) {
    let prevData = this.state.counters;

    if (data) {
      prevData[index] = data;
    } else {
      prevData.splice(index, 1);
    }

    this.setState({
      counters: prevData
    });
  }

  render() {
    const {
      isLoading,  
    } = this.state;

    if (isLoading) {
        return (<div><p>Please wait...</p></div>);
    }
    return (
      <>
       
      </>
    );
  }
}

export default Home;