// Dependencies
// =============================================================

// Node modules
var express = require("express");
var bodyParser = require("body-parser");

// Routes
var apiRoutes = require("./routes/apiRoutes.js");
var htmlRoutes = require("./routes/htmlRoutes.js");

// Tables and waiting list
var tableData = require("./data/tableData.js");
var waitinglistData = require("./data/waitinglistData.js");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



apiRoutes.apiRoutes(app);
htmlRoutes.htmlRoutes(app);