// Define app using express
var express = require("express")
var app = express()
// Require database SCRIPT file
var db = require("./database.js")
// Require md5 MODULE
var md5 = require("md5")
// Require cors
const cors = require("cors")
// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors());

// Set server port
var HTTP_PORT = 5000
// Start server
const server = app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"Your API works! (200)"});
	res.status(200);
});
// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});
