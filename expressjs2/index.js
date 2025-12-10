const express = require("express");
const app = express();

const port = 8080;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");  // bydefault this line goes in view then in home.ejs
    // pura ka pura page render krana
});

app.listen(port,()=> {
    console.log(`listen on port ${port}`)
})

// to acess view file from anywhere not only from where we are running the file
const path = require("path");
app.set("views",path.join(__dirname,"/views")); // form this we acess view from any path


// passing data to ejs

app.get("/rolldice",(req,res)=> {
    let diceval = Math.floor(Math.random()*6)+1;  // assume this is dataset
    res.render("rolldice.ejs",{diceval});  // this diceval name is passed from html
})