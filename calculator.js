const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//this creates an app which uses the express module.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
 res.sendFile(__dirname + "/index.html");
});
//this creates a home route.
//does the res.sendFile send the index.html to the server?
//res.send function sets the content type to text/Html which means that the client will now treat it as text. It then returns the response to the client. 
// a client is any computer hardware or software device that requests access to a service provided by a server.
app.post("/", function(req,res){

//console.log(req.body);
var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;

 res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
 console.log("Server is running on port 3000.");
});
//we are declaring our server to run on port 3000.