const express = require("express");
const hbs = require("hbs");
const cors = require("cors");
const path = require("path");

require("./src/db/conn");
const Register = require("./src/models/register");  

const app = express();

const port = process.env.PORT || 6100;

const template_Path= path.join(__dirname,"../website-clone/templates/views");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));

app.set("view engine","hbs");
app.set("views",template_Path);

app.get("/",(req,res)=>{
    res.render("front")
});

app.post("/front", async(req, res) => {
    try {
        const employee = new Register({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            phone: req.body.phone
        })
        const registered = await employee.save();
        console.log(registered)
        res.status(201).render("front");
    }
    catch (error) {
        res.status(400).send(error)
    }
});

app.get('/back', (req, res) => {
    Register.find((err, docs) => {
        if (!err) {
            res.render("back",{
                list: docs
            });
        }
        else {
            res.render("front")
        }
    }).sort({ '_id': -1 });
});

app.listen(port,()=>{
    console.log(`Server is running on port no ${port}`);
})
