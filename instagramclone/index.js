const express = require("express");
const methodOverride = require("method-override");//acessing method override
const app = express(); // Create an express application
const port = 8080;              // define port
const path = require("path");
app.use(express.urlencoded({ extended: true })); // Parse form data (POST request data from HTML forms)

app.use(methodOverride("_method")); // to convert patch requests
app.set("view engine", "ejs"); // Tell express that we are using EJS for templates

//  __dirname           →  expressjs2
// path.join(__dirname,"views")   → expressjs2/views


app.set("views",path.join(__dirname,"views")); // Set the folder where EJS files (.ejs) are stored
app.use(express.static(path.join(__dirname,"public"))); // Serve static files (css, images, js) from the public folder

app.listen(port,() =>{ // Start server and listen on given port
    console.log("listening on port: 8080");
})

let feedpost = [
    {
        id:"ab1",
        username: "neha",
        image:"https://picsum.photos/400",
        caption:"@hello"
    },
    {
        id:"ab2",
        username:"sneha",
        image:"https://picsum.photos/401",
        caption :"@ok mama"
    } ,
    {
        id:"ab3",
        username:"michel",
        image:"https://picsum.photos/402",
        caption :"@wowo"
    } 
];

app.get("/posts",(req,res) => {
     res.render("index.ejs",{feedpost})
});

app.get("/posts/form",(req,res) => {
    res.render("show.ejs")
})

app.post("/posts",(req,res) => {
     let {username,image,caption} = req.body;
     feedpost.push({
        id: Date.now().toString(),
        username,
        image,
        caption,
     })
     res.redirect("/posts");
});

// delete specific post
app.delete("/posts/:id",(req,res) =>{  // form route should math this route
       let {id} = req.params; 
       feedpost = feedpost.filter((p) => id !== p.id);
    //    res.send("success")
       res.redirect("/posts");
    
});

app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params; 
    let post = feedpost.find((p) => id === p.id); // checking if user enter id mathches with editing id then send only that post
    res.render("edit.ejs",{post}); // if mathes then send that post to edit ejs
})
app.patch("/posts/:id",(req,res) => {
    let {id} = req.params; 
    let newCaption = req.body.caption;  // taking new caption
    let post = feedpost.find((p) => id === p.id); // finding that post to update it
    post.caption = newCaption; // assigning new caption
    res.redirect("/posts");

})