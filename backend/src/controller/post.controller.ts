import mongoose from "mongoose"
import service from "../service/post.service"
import {Request,Response} from "express"

function isObjectIdValid(id:any) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  async function findAllPost(req:Request,res:Response) {
        const posts = await service.findAllPost()
        res.send(posts)
  }
async function findUserByID(req:Request,res:Response) {
    const id = req.params
    if(!isObjectIdValid(id)){
        return res.status(400).json({message:"ID inválido!"})
    
    }
    const post = await service.findPostByID(id)
    res.send(post)
}
async function createUser(req:Request,res:Response){
    const body = req.body
    if(!body||body.content===""){
     res.status(400).json({message:"ID inválido"})
    }else{
        await service.createPost(body)
        res.status(200).json({message:"Post Realizado com sucesso!"})
    }
}
async function updateById(req:Request,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(400).json({ message: "ID inválido!" });
      }
    const body = req.body
    const post = await service.updatePost(id,body)
    res.send(post)
}
async function deleteByID(req:Request,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(400).json({ message: "ID inválido!" });
      }
    await service.deletePost(id)
    res.send({message:"Post deleted"})
}
export default {
    findAllPost,
    findUserByID,
    createUser,
    updateById,
    deleteByID,
 
}