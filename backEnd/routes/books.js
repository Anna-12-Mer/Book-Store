var express = require('express');
var router = express.Router();
var bodyPerser = require('body-parser');

router.use(bodyPerser.urlencoded({ extended: false }));
router.use(bodyPerser.json());

var async = require('async');

// Add a book to the store 
router.post('/addBook', function (req, res) {
    console.log('Body', req.body);

});
module.exports = router; 