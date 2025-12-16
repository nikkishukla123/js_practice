
const express = require("express"); // Import express framework
const methodOverride = require("method-override");//acessing method override
const app = express(); // Create an express application
const port = 8080;              // define port
const path = require("path");
app.use(express.urlencoded({ extended: true })); // Parse form data (POST request data from HTML forms)

app.use(methodOverride("_method"));
app.set("view engine", "ejs"); // Tell express that we are using EJS for templates

//  __dirname           →  expressjs2
// path.join(__dirname,"views")   → expressjs2/views


app.set("views",path.join(__dirname,"views")); // Set the folder where EJS files (.ejs) are stored
app.use(express.static(path.join(__dirname,"public"))); // Serve static files (css, images, js) from the public folder


app.listen(port,() =>{ // Start server and listen on given port
    console.log("listening on port: 8080");
})


// making quora website
let posts = [   // makin an array
    {
        id:"ab1",
        username: "apnacollege",
        content:"i love coding"
    },
    {    
        id:"ab2",
        username: "nikki",
        content:"i love sadhguru"
    },
    {
        id:"ab3",
        username: "neha",
        content:"i  am wonderful"
    },
]

app.get("/posts",(req,res)=>{ // index get route to post something
    res.render("index.ejs", { posts });  // sending posts to ejs file
})


// implement:POST/posts : create route to add a new post ,2 route serve the form and add the new post
app.get("/posts/form", (req,res) =>{ // first getting form
    res.render("form.ejs")
})


app.post("/posts",(req,res) => {  //as it is routing again on posts
    let {username,content} = req.body
    posts.push({
        id: Date.now().toString(),
        username,
        content
    });  // pushing the new content user na his post in post
    
    
    res.redirect("/posts")  // redirecting from , form page again to the post page
    
})



// implement get/post/:id :=> show route
// to print user post in detail bu their unique id
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id); // checking if user enter id mathches with id in posts
    res.render("showid.ejs",{ post });
    console.log(post);
    
 });
 
// for creating new id for every post npm install uuid and call it in each post and push it also


//inplement:PATCH/post/:id
// patch request: for updating specific post

app.patch("/posts/:id",(req,res) => {
    let { id } = req.params;
    console.log(id)
    let newContent= req.body.content;
    let post = posts.find((p) => id === p.id); // checking if user enter id mathches with editing id
     post.content = newContent;
    
   res.redirect("/posts")
})

// editing the post 
//    get method :=> /posts/:id/edit
app.get("/posts/:id/edit",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id); // checking if user enter id mathches with editing id
    res.render("edit.ejs",{post})
})

// delete specific post
///posts/:id
app.delete("/posts/:id",(req,res) => {
    let { id } = req.params;
     posts = posts.filter((p) => id !== p.id);  // filter out the post jha jin ka id match nahi hota us jagah filter out kardoo,changing in the array posts
     res.redirect("/posts")
});

