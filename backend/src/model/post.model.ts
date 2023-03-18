import mongoose from "mongoose";

export interface IPost {
  author: String;
  content: String;
  date: String;
}

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  urlVideo: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});
export const Post = mongoose.model("Post", postSchema);
