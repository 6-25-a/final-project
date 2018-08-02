import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './screens/Home';
import About from './screens/About';
import CustomerPortal from './screens/CustomerPortal';
import ProviderPortal from './screens/ProviderPortal';
import TaskForm from './screens/TaskForm';

const Index = ({ pathname}) => {
    switch (pathname) {
        case '/':
            return <Home / >
        case '/about':
            return <About / >
        case '/register':
            return <Signup / >
        case '/login':
            return <Login / >
        case '/customerportal':
            return <CustomerPortal / >
        case '/providerportal':
            return <ProviderPortal / >
        case '/taskform':
            return <TaskForm / >
        default:
            return <Home / >
    }
}

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname = { pathname }/>,
    document.getElementById('root')
)

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
})