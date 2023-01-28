const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=["Input","Process","Output"];
let workItem = [];

app.get("/",function(req,res){
    let day = date();
    res.render('list',{title:day,tasks:items});
});

app.post("/",(req,res)=>{
    let inp = req.body.inp;

    console.log(req.body.button);
    if(req.body.list === "Work"){
        workItem.push(inp);
        res.redirect("/work");
    } else{
        items.push(inp);
        res.redirect("/");
    }

    
});

app.post("/work",(req,res)=>{
    let inp = req.body.inp;
    workItem.push(inp);
    res.redirect("/work");
});

app.get("/work",(req,res)=>{
    res.render("list",{title:"Work List",tasks:workItem});
});

app.get("/about",(req,res)=>{
    res.render("aboutUs");
});

app.listen(3000,function(){
    console.log("Server at 3000");
});
//Hello
