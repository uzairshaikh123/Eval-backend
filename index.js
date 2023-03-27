const express = require('express')
const { connection } = require('./db')
const { router } = require('./middlewares/auth.middleware')
const { postrouter } = require('./routes/post.route')
const { userrouter } = require('./routes/user.routes')
const cors=require('cors')
const app = express()
app.use(cors())
require('dotenv').config()
app.use(express.json())
app.use("/users",userrouter)
app.use("/posts",router,postrouter)


app.listen(process.env.port,async ()=>{

    try {
        await connection
        console.log("app is running on port 4500")
        console.log("mongo is running")
    } catch (error) {
        
        console.log("some error is there")
    }

})