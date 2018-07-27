import React, { Component } from 'react';

const Navbar  =  ({title}) => (
  <div>
    <h1>{title}</h1> 
    <a href='/'>Home |  </a>
    <a href='/about'>About | </a>
    <a href='/register'>Register | </a>
    <a href='/login'>Login | </a>
    <a href='/logout'>Logout  </a>
  </div>
)

// class Navbar extends Component {
//   onLogoutClick(e) {
//     e.preventDefault();
//     this.props.clearCurrentProvider();
//     this.props.logoutUser();
//   }
//   render() {

//     const authLinks = (
//       <ul className="navbar-nav ml-auto">


//         <li className="nav-item">
//           <a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">

//           <img
//           className="rounded-circle"
//           style={{ width: '25px', marginRight: '5px' }} 
//           title="Gravatar needed to display image"
//           />
//           Logout
//           </a>
//         </li>
//       </ul>
//     );

//     const customerLinks = (
//       <ul className="navbar-nav ml-auto">
//       <li className="nav-item">
//           <a className="nav-link" href="/index">Welcome</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/register">Register</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/login">Login</a>
//         </li>
//       </ul>
//     );
//       return (
//           <nav className="navbar navbar-expand-sm navbar-light bg-dark mb-4">
//             <div className="container">
//               <a className="navbar-brand text" href="/">Skillz B</a>
//               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
        
//               <div className="collapse navbar-collapse" id="mobile-nav">
//                 <ul className="navbar-nav mr-auto">
//                   <li className="nav-item">
//                     <a className="nav-link" href="/ProviderPortal"> Providers
//                     </a>
//                   </li>

//                     <li className="nav-item">
//                     <a className="nav-link" href="/CustomerPortal"> Customers
//                     </a>
//                   </li>
//                 </ul>
                
//               </div>
//             </div>
//           </nav>
//       )
//   }
// } 

export default Navbar;



