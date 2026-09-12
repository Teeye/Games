const express=require("express");
const app=express();
const path=require("path");
const {v4:uuidv4}=require("uuid");
const methodOverride=require("method-override");

let port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"))


let posts=[
    {
        id:uuidv4(),
        username:"apnacollege",
        content:"i love coding",
    },
     {
        id:uuidv4(),
        username:"neha",
        content:"web dev journey started",
    },
     {
        id: uuidv4(),
        username:"rahulkumar",
        content:"i cracked internship",
    },
]
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/add",(req,res)=>{
    res.render("add.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content})
    res.redirect("/posts")
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id===p.id);
    res.render("see.ejs",{post});
})
app.get("/posts/:id/edit",(req,res)=>{
let {id}=req.params;
let post=posts.find((p)=>id===p.id);
res.render("edit.ejs",{post});
})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
     res.redirect("/posts");
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})