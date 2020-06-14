const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.set("view engine", "ejs");

app.get("/" , function (req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = ""
    var dayType = ""




    if(currentDay=== 6 || currentDay===0){
        if(currentDay === 6){
            day = "Saturaday"
        }else{  
            day = "Sunaday"
        }
        dayType = "Weekend"
    }else {
        if(currentDay === 1){
            day= "Monday"
        }else if (currentDay === 2){
            day="Tuesday"
        }else if (currentDay === 3){
            day="Wednesday"
        }else if (currentDay === 4){
            day="Thursday"
        }else if (currentDay === 5){
            day="Friday"
        }
        dayType = "Weekday"

    }
    res.render("list", {kindOfDay: dayType, todayDay: day });
})

app.listen(3000, function (){
    console.log("You are connected to PORT 3000");
});