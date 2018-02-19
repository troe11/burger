var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('./config/connection.js')



var app = express();

var PORT = 3000;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Set Handlebars.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them

app.listen(PORT, function() {
    var routes = require("./controllers/burgers_controller.js");

    app.use(routes);
    console.log("App now listening at localhost:" + PORT);
});
// });