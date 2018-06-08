// Tables and waiting list
var tableData = require("../data/tableData.js");
var waitinglistData = require("../data/waitinglistData.js");

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

// Route to retrieve tables
var apiRoutes = function(app) {
    // Get tables
    app.get("/api/tables", function(req,res) {
        console.log(res.json(tableData));
        return res.json(tableData);
    });

    // Get waiting list
    app.get("/api/waitinglist", function(req,res) {
        console.log(res.json(waitinglistData));    
        return res.json(waitinglistData);
    });

    // Post table
    app.post("/api/tables", function(req, res){
        var newtable = req.body;
        console.log(tableData);
        if (tableData.tableData.length < 5) {
            tableData.tableData.push(newtable);
            res.json(newtable);
            alert("Table booked successful.");
        }
        else {
            waitinglistData.waitinglistData.push(newtable);
            res.json(newtable);
            alert("All tables full. You have been added to the waiting list.");
        }
    });
}

module.exports.apiRoutes = apiRoutes;
