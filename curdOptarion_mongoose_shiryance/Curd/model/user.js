let mongoose = require("mongoose");

let username = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    img:{
        type:String,
    }
})
 
let User = mongoose.model("user",username);
module.exports=User;