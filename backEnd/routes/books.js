var express = require('express');
var router = express.Router();
var bodyPerser = require('body-parser');

router.use(bodyPerser.urlencoded({ extended: false }));
router.use(bodyPerser.json());

var async = require('async');
var books = require("../controllers/books.controller");
// Add a book to the store 
router.post('/addBook', books.create);
module.exports = router; 