const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json())  // standar line for post request


app.listen(port, ()=>{
    console.log(`listen to port ${port}`)
})


app.get("/register",(req,res) => {  // get requets
    let {name,password} = req.query;  // getting name ,password from req.query
   res.send(`standar get request welcome:${name}`)
})

app.post("/register",(req,res) => { // post request
    let {name,password} = req.body   // getting name ,password from req.body, as it is in body
    res.send(`standar post request welcome:${name}`)

 })