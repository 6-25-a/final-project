import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home, About, Contact, CustomerServices, CustomerLogin, CustomerSignup } from './screens';

const Index = ({ pathname }) => {
    switch(pathname) {
        case '/':
            return <Home />
        case './about':
            return <About />
        case '/contact':
            return <Contact />
        case '/customerservices':
            return <CustomerServices />
        case '/customersignup':
            return <CustomerSignup />
        case '/customerlogin':
            return <CustomerLogin />
        default:
            return <Home />
    }
}

let pathname = window.location.pathname;

ReactDOM.render(
    <Index pathname={pathname} />,
    document.getElementById('root')
)

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
})
