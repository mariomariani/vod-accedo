/* eslint-disable */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + (process.env.DIST_FOLDER || '/.tmp/');
app.use(express.static(distDir));

// Initialize the app.
var server = app.listen(process.env.PORT || 8000, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
