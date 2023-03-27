const express=require('express')
const { userModel } = require('../model/user.model')
const userrouter = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

userrouter.post("/register",async (req,res)=>{

    let {email,password,name,gender,age,city,is_married}=req.body
console.log(req.body)
    try {

        let data = await userModel.find({email})
        if(data.length){
            res.status(400).send({"msg":"User already exist, please login"})
        }else{
            bcrypt.hash(password, 5, async function(err, hash) {
                let newdata = new userModel({email,password:hash,name,gender,age,city,is_married})
                await newdata.save()
                res.status(200).send({"msg":"User Successfully Registered"})
            });
            
            
        }
    } catch (error) {
        res.status(200).send({"msg":error.message})
        
    }






})
userrouter.post("/login",async (req,res)=>{

    const {email,password}=req.body

    try {
        let data = await userModel.find({email})
        console.log(data)
         const pass=data[0].password
         console.log(pass)
    if(data.length){
        bcrypt.compare(password, pass, function(err, result) {
          if(result){
            res.status(200).send({"msg":"User Loggedin Successfully",token:jwt.sign({ user_ID: data[0]._id }, 'user')})
        }else{
            
            res.status(400).send({"msg":err})
          }
        });
    }else{

    }
    } catch (error) {
        
    }

// res.send()

})

module.exports={
    userrouter
}