const express = require("express");

const app = express();
// console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});  // listen karejhra hai must stop:ctrl+c,local host can be be get only on local machine

// app.use((req,res)=>{
//     console.log("request received")  //  app is listening on port 3000,request received
//     res.send("this is basic")  // for sending response also can send object
// })  

// // routing :it is process of selecting a different path or between or across multiple networks
 app.get("/",(req,res)=>{
    res.send("you contacted root path");
 });

 app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");  // write like this http://localhost:3000/gauva
 });

 app.get("/gauva",(req,res)=>{
    res.send("you contacted gauva path");
 });

//  app.get("/*", (req, res) => {
//     res.send("this path does not exist");
// });
 app.post("/",(req,res)=>{
    res.send("you send a post request to root");
 })   // have to change from get request to post request

 // note: here we have restart node again and again while we make even a small chnges to avoid this
 // nodemon is used which automatically start the server

 app.get("/mango",(req,res)=>{
    res.send("you contacted mago path");  // so it automatically updated
 });


 // alag pages pa jaane ke liye 
 app.get("/:username/:id",(req,res)=>{
    let {username, id} = req.params;   // it takes parameter of different types
    res.send(`welcome to the page of @${username}`)
 })


 // for query sending
 app.get("/search",(req,res)=>{
   let {q} = req.query;  // use this for query
   res.send(`<h1> search result for query:${q}</h1>`)  // http://localhost:3000/search?q=orange
 })