// Title: Basic Bookstore API
// Purpose: Facilitates CRD events on in-memory data store
// Author: Brian White
// Date: 1/23/2015
// Endpoints:
// - /books
// - /books/:id
// - /books/:id/publisher
// - /books/:id/author
// - /books/authors
// - /books/publishers
// - /books/titles

// ~~~~~~~~~~~~~~~~~~~~ Dependencies ~~~~~~~~~~~~~~~~~

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var routes = require('./routes');

module.exports = app;
// ~~~~~~~~~~~~~~~~~~~~~ Middleware ~~~~~~~~~~~~~~~~~~

app.use(bodyParser.json());                         // parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // parsing application.x-www-form-urlencoded
app.use(multer());                                  // parsing multipart/form-data

// ~~~~~~~~~~~~~~~~~~~ Routes ~~~~~~~~~~~~~~~~~~~~~~~~

app.get('/', routes.default);
app.get('/books', routes.bookList);
app.post('/books', routes.bookPost);
app.get('/books/:id', routes.bookIdGet);
app.delete('/books/:id', routes.bookIdDel);
app.get('/books/:id/publisher', routes.bookIdPublisher);
app.get('/books/:id/author', routes.bookIdAuthor);
app.get('/authors', routes.authors);
app.get('/publishers', routes.publishers);
app.get('/titles', routes.titles);

// ~~~~~~~~~~~~~~~ Start Server ~~~~~~~~~~~~~~~~~~~~~~

app.listen(3000, function(req, res){

  console.log('Listening on Port 3000');

});
