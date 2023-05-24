const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tejasthakran16:tejasthakran16@cluster0.kwp5lwf.mongodb.net/harsh" ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log("error");
})