import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    author:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    urlVideo:{
        type:String,
        require:true
    },
    createdAt:{
        type:String,
        require:true
    }

})
export const Post = mongoose.model("Post",postSchema)