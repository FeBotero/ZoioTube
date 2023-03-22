import mongoose from "mongoose";

export interface IPost {
  author: String;
  content: String;
  title: string;
  image: Object;
  createdAt: String;
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
  title: {
    type: String,
    require: true,
  },

  image: {
    type: Object,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});
export const Post = mongoose.model("Post", postSchema);
