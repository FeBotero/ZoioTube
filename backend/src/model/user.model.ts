import mongoose from "mongoose";

export interface IUser {
  name: String;
  email: String;
  avatar: string;
  createdAt: String;
}

const userSchema = new mongoose.Schema({
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
});
export const User = mongoose.model("User", userSchema);
