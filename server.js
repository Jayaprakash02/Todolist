const express = require("express");
const bodyParser = require("body-parser");
const app = express();

 var newItems = [];

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req,res){
var today = new Date()
var option = {
weekday:"long",
day:"numeric",
month:"long"
};
var day = today.toLocaleDateString("en-US",option);

res.render("list", {DAY:day, newListItems : newItems} );

});

app.post("/", function (req,res){
   var item = req.body.newItem;

    newItems.push(item);

    res.redirect("/");
});



app.listen("3000",function(){
    console.log("server is running on port 3000");
});