import mongoose from "mongoose"
import {Post} from "../model/post.model"

//Listar todos os posts(Videos)
function findAllPost(){
    return Post.find()
}
function findPostByID(id:string){
    const objectID = new mongoose.Types.ObjectId(id)
    return Post.findById(objectID)
}
function createPost(body:any){
    return Post.create(body)
}
function updatePost(id:string,body:any){
    const objectID = new mongoose.Types.ObjectId(id)
    return Post.findByIdAndUpdate(objectID,body)
}
function deletePost(id:string){
    const objectID = new mongoose.Types.ObjectId(id)
    return Post.findByIdAndDelete(objectID)
}
export default{
    findAllPost,
    findPostByID,
    createPost,
    updatePost,
    deletePost
}