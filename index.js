const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});

app.post("/", function(req, res){
    console.log(req.body)
    if (req.body.button == "digital") {
        res.sendFile(__dirname + "/digital/digital.html")
    } else if (req.body.button == "analog") {
        res.sendFile(__dirname + "/analog/analog.html")
    }

});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running.")
})