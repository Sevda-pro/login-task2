const express=require("express")
const path=require("path")
const router=express.Router();
const controller=require(path.join(__dirname+'/customer.controller'));

router.route("/").post( controller.createCustomer);
router.route("/data").get( controller.findAllCustomer);
router.route("/:id").post( controller.findCustomer);
module.exports=router;
