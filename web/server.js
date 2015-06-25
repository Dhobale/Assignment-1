/* *****************
 * Require Imports *
 * *****************/
 
var express = require('express');
var path = require('path');
 
/* ***********************
 * Initialize Middleware *
 * **********************/
 
// Instantiate the express object
var app = express();
 
// Use the static assets from the same directory as this server.js file
app.use(express.static(path.resolve("./")));
 
/* **************
 * GET Requests *
 * **************/
 
// index.html
app.get('/', function(req, res) {
  res.sendFile('index.html');
});
 
/* ******************
 * Start the server *
 * ******************/
 
var port = process.env.PORT || 8000;
 
var server = app.listen(port, function() {
  console.log('Listening on port:', port);
});







// var http = require('http');
// var fs = require('fs');
// var index = fs.readFileSync('./index.html');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(index);
// }).listen(8000, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:8000/')





// var express = require('express');
// var app = express();
// var path = require("path");

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.listen(8000);
