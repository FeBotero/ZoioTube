import mongoose, { Schema, Document } from "mongoose";

export interface Iuser extends Document {
  name: String;
  email: String;
  avatar: string;
  password: string;
  confirmPassword?: string;
  createdAt: String;
}

const User: Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  cretedAt: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  access_token: {
    type: String,
  },
  createdAt: {
    type: Date,
    require: true,
  },
});
export default mongoose.model<Iuser>("User", User, "users");
