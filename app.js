const express = require("express");
const app = express();
const bodyParser = require("body-parser")

var items=[];
let workItems=[];

app.use(bodyParser.urlencoded({extended: true}));
// for express to know access point 
app.use(express.static("public"));


app.set("view engine", "ejs");


app.get("/" , function (req, res){

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    
    res.render("list", {listTitle: day, newListItem: items });
})

app.post("/", function(req, res){
    console.log(req.body)
    var note = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(note);
        res.redirect("/work")
    }else{
        items.push(note);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItem: workItems});
});

app.post("/work", function (req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function (){
    console.log("You are connected to PORT 3000");
});