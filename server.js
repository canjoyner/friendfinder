var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 require("./routes/apiRoutes")(app);
// =============================================================
// var friends = [
//   {
//     username: "George",
//     userURL:"",
//     question1:1,
//     question2:2,
//     question3:3,
//     question4:4,
//     question5:5
//   }];

  app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

  app.get("/survey", function(req,res){
  	res.sendFile(path.join(__dirname, "survey.html"))
  });

  app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

  // app.post()