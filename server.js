//=========================================================================
//DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
//=========================================================================

var express = require("express");
//var bodyParser = require("body-praser");
var path = require("path");

//=========================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for an express server
//=========================================================================

//Tells node that we are creating an "express" server
var app = express();

// Sets an initial port as 
var PORT = process.env.PORT || 3031;

// Sets up the Express app to handle data paarsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(expressParser.text());

// Add the application routes
require(path.join(__dirname, "./routing/apiRoute"))(app);
require(path.join(__dirname, "./routing/htmlRoutes"))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
