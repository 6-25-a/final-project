// module imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// db config
const db = require('./config/config').mongoURI;

// connect to Mongodb
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log('Mongodb is Connected'))
    .catch(err => console.log(err));

// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())
app.use(cors)

// PRODUCTION ONLY
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Middleware: Passport
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);


// Routes
app.use('./api/users', users);
app.use('./api/profile', profile);
app.use('./api/posts', posts);

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Express is alive on port ${ port }`));

module.exports = app;