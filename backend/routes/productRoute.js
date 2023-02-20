const express=require('express');
const { getAllProducts } = require('../controller/productController.js');


const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Hello world")
})

// router.route("/").get((req,res)=>{
//     res.send("<h1>Hello<h1/>")
//     res.status(200).json({message:"Route is working fine"});
// })
router.route("/products").get((req,res)=>{
    console.log("hello")
    res.status(200).json({message:"Route is working fine"});
    res.send("Hello")
});

module.exports=router;