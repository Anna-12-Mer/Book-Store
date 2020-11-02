var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema for Book 
var bookSchema = new Schema({
    nameBook: { type: String, required: true },
    description: { type: String, require: true },
    price: { type: String, required: true },
    imageUrl: { type: String, required: true }
});
var Book = mongoose.model('Book', bookSchema);
module.exports = Book;