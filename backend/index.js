const express=require("express")
const cors=require("cors")
const path=require("path")
const bodyParser=require('body-parser')
const folder_route=require("./index.route")
const app=express()
const controller=require(path.join(__dirname+'/customer.controller'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
// const staticpath=path.join(__dirname,"./public");
// app.use(express.static(staticpath))
const db=require('./db.config')
db.sequelize.sync().then(()=>{
    console.log("ok report")
  }).catch(()=>{
    console.log("error")
  })
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index2.html"))
})
app.get("/new", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"))
})
app.use("/customer",folder_route)
app.listen(3000);


