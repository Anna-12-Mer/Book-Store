const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// Get API routes
const book = require('./routes/books');


// // View engine setup 
// app.set('view', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.get('/', (req, res) => {
//     // res.render('home');
// });

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Gonfigurate the access allow origin
app.use(function (req, res, next) {
    var allowedOrigins = ['http://localhost:4200', 'http://localhost:4400']
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,HEAD, OPTIONS,PUT, DELETE,PATCH'); //
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept', 'Authorization');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,application/json");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Conncet to mongodb 
mongoose.Promise = global.Promise;

//Connection to databse
mongoose.connect('mongodb://localhost/bookStore');
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () {
    console.log("connection is established");
});
app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page

    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function () {
    console.log('lisentung on 3000')
});
