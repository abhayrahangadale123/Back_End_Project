let express = require("express");
const User = require("./model/user");
const { default: mongoose } = require("mongoose");
let app = express();
let mongoosee = require("mongoose");


mongoosee.connect("mongodb://127.0.0.1:27017/SDataBase").then(()=>{
    console.log("db connect.. hiiiiii........... haiiiiiiiiiiii");
    
}).then((err)=>{
    console.log(err);
    
})


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.send("hleooooooooooooooooooooooooooooooooo jiiiiiiiiiaaaaaaaaaaaa")
})
 

app.get("/Home",(req,res)=>{
    res.render("Home")
})
app.get("/read", async (req,res)=>{
   
       
        let users = await User.find();
        res.render("read", { users });
     
    
})

app.post("/create", async (req,res)=>{
    
    let dbnewUser = new User(req.body);
    console.log(dbnewUser ,"data aya gayayaaaaaaaaaaaaaaaaaaaaaaaaaa");
    
    await dbnewUser.save();
    res.redirect("/read");
    
})


app.post("/delete/:id", async (req,res)=>{
    
  
    let {id} = req.params
    const deletedUser = await User.findByIdAndDelete(id);
     
    if (!deletedUser) {
        return res.status(404).send("User not found");
    }
    res.redirect("/read");
    
})

app.listen(3000,(req,res)=>{
    console.log("its workingggg 3000");
    
})