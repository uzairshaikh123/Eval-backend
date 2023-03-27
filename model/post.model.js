const mongoose = require('mongoose')


const postSchema=mongoose.Schema({
    title : String,
    body : String,
    device : String,
    no_of_comments : Number,
    user_ID:String
})


const postModel=mongoose.model("postdataeval",postSchema)


module.exports={
    postModel
}