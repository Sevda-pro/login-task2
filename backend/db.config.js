const Sequelize=require('sequelize')
const path=require("path")

const sequelize=new Sequelize('customer','root','Sahil123@',{
    host:'localhost',
    port:3306,
    dialect:'mysql'
})
const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize;
 db.customers = require(path.join(__dirname+'/customer.model'))(sequelize, Sequelize); 
module.exports=db;