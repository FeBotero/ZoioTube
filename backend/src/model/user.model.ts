import mongoose from "mongoose";

export interface IUser {
  name: String;
  email: String;
  password: String;
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
  password: {
    type: String,
    require: true,
  },
});
export const User = mongoose.model("User", userSchema);
