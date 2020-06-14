const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.get("/" , function (req, res){

    var today = new Date();
    if(today.getDay()=== 6 || today.getDay()===0){
        res.send("Yay it's the weekend!");
    }else {
        res.send("It is not a weekday :/");    }
})

app.listen(3000, function (){
    console.log("You are connected to PORT 3000");
});