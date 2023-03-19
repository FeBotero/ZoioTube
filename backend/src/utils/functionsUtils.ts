import mongoose from "mongoose";

//Para validar se o id é do tipo objectID
export function isObjectIdValid(id: any) {
  return mongoose.Types.ObjectId.isValid(id);
}

export function validBodyUser(body: any) {
  if (!body || body.name === "" || body.email === "" || body.password === "") {
    return false;
  } else {
    return true;
  }
}
