const express=require('express')
const postrouter = express.Router()
var jwt = require('jsonwebtoken');
const { postModel } = require('../model/post.model');
const { userModel } = require('../model/user.model');



postrouter.get("/",async (req,res)=>{
 console.log(req.body)
 let {user_ID}=req.body

 try {
    let data=await userModel.find(user_ID)
    res.status(200).send(data)
} catch (error) {
     res.status(400).send({"msg":error.message})
    
 }




    
})
postrouter.get("/top",async (req,res)=>{





    
})
postrouter.post("/add",async (req,res)=>{
console.log("add",req.body)
let payload=req.body
try {
   let data = new postModel(payload)
   await data.save()
   res.status(200).send({"msg":"Data has been Added"})
} catch (error) {
    res.status(400).send({"msg":error.message})
}



})
postrouter.patch("/update/:id",async (req,res)=>{

let {id}=req.params
let payload=req.body
    try {
       let data =  await postModel.findByIdAndUpdate({_id:id},payload)
      
       res.status(200).send({"msg":"Data has been Updated"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }


})
postrouter.delete("/delete/:id",async (req,res)=>{
    let {id}=req.params
        try {
           let data =  await postModel.findByIdAndDelete({_id:id})
          
           res.status(200).send({"msg":"Data has been deleted"})
        } catch (error) {
            res.status(400).send({"msg":error.message})
        }


})








module.exports={
    postrouter
}