const express=require('express')
const router = express.Router()
var jwt = require('jsonwebtoken');

router.use((req,res,next)=>{
    let token = req.headers.authorization
   
      jwt.verify(token, 'user', function(err, decoded) {
          if(decoded){
              
               req.body.user_ID=decoded.user_ID
              next()
          }else{
            res.status(404).send({"msg":"This route is restricted you need token to access it"})
          }
        });
})

module.exports={
    router
}