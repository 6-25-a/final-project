import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Footer = ({title}) => (
  <div>
    <h1>{title}</h1>
    <footer className = "bg-dark text-white mt-5 p-4 text-center">
            Copyright &copy; {new Date().getFullYear()} <span>Skillz B</span> 
        </footer>
    </div>
)

// export default () => {
//     return ( 
//         <footer className = "bg-dark text-white mt-5 p-4 text-center">
//             Copyright &copy; {new Date().getFullYear()} <span>Skillz B</span> 
//         </footer>
//     );
// };

export default Footer;
