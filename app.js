let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

const router = require ("./routes/userRoutes");

app.use(router);

mongoose.connect("mongodb://localhhost/userController", function (err, res) {
    if (err) {
        console.log("ERROR: connecting to Database. " + err);
    }

    app.listen(3000, function (){
        console.log("Node server running on http://localhost:3000")
    });
});

let userControllerCtrl = require("./controllers/userController");


