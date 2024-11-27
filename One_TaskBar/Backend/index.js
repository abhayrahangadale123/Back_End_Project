let express = require("express");
let app = express();
 let fs =  require("fs")
 const path = require("path")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
 app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.get("/",function(req,res){
    console.log("hiiiiiiiiiiiiii");
    
    fs.readdir("./Files", function (err, Files) {
        console.log(Files);
        
    })
    res.send("helooooo")
})

app.listen(3000,(req,res)=>{
    console.log("it's working 30000");
    
})