import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './components/auth/Register';
import Home from './screens/Home';


const Index = ({ pathname }) => {
    switch(pathname) {
        case '/':
            return <Home /> 
        case '/register':
            return <Signup />       
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