const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use("view engine", "ejs");

app.get("/" , function (req, res){

    var today = new Date();
    var currentDay = today.getDay();
    if(currentDay=== 6 || currentDay===0){
        res.send("Yay it's the weekend!");
    }else {
        res.sendFile(__dirname + "/index.html"); 
    }
})

app.listen(3000, function (){
    console.log("You are connected to PORT 3000");
});