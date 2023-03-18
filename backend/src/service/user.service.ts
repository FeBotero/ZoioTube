import mongoose from "mongoose";
import {User} from "../model/user.model"

function findAllUser(){
    return User.find()
}
function findUserByID(id:string){
    const objectID = new mongoose.Types.ObjectId(id)
    return User.findById(objectID)
}
function createUser(body:any){
    return User.create(body)
}
function updateUser(id:string,body:any){
    const objectID = new mongoose.Types.ObjectId(id)
    return User.findByIdAndUpdate(objectID,body)
}
function deleteUser(id:string){
    const objectID = new mongoose.Types.ObjectId(id)
    return User.findByIdAndDelete(objectID)
}
export default{
    findAllUser,
    findUserByID,
    createUser,
    updateUser,
    deleteUser
}