const express = require('express');
const http = require('http');
const path = require('path');
// const bodyParser = require('body-perser');
const app = express();
const api = require('./routes');

// View engine setup 
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    // res.render('home');
});

// Gonfigurate the access allow origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    req.setTimeout(0);
    next();
});
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
})
