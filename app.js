const express = require("express");
const app = express();
const bodyParser = require("body-parser")

var items=[];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/" , function (req, res){

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    
    res.render("list", {kindOfDay: day, newListItem: items });
})

app.post("/", function(req, res){
    var note = req.body.newItem;
    items.push(note);
    res.redirect("/");
});

app.listen(3000, function (){
    console.log("You are connected to PORT 3000");
});