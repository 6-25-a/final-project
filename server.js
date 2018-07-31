// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// !!! PRODUCTION ONLY !!! 
app.use(express.static(path.join(__dirname, 'client/build')));

// db config
mongoose.connect('mongodb://Jonesdl_38:98TestMe25@ds231951.mlab.com:31951/6-25-a').then(
    () => {
        console.log('dbconnected');
    }
);

// models
const User = require('./models/User');

// routes
const users = require('./routes/api/users');

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// API
app.use('/api/users', users);

// !!! PRODUCTION ONLY !!! 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express is alive on port ${ port }`));

module.exports = app;