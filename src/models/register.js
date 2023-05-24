const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Register = new mongoose.model('Register',registerSchema)

module.exports=Register;