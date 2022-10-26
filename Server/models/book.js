let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);