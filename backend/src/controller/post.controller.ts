import service from "../service/post.service";
import { Request, Response } from "express";
import { IPost } from "../model/post.model";
import { isObjectIdValid } from "../utils/functionsUtils";
import cloudinary from "../utils/cloudinary";

interface Irequest {
  params: string;
  body: IPost;
}

async function findAllPost(req: Irequest, res: Response) {
  const posts = await service.findAllPost();
  res.send(posts);
}
async function findUserByID(req: Irequest, res: Response) {
  const id = req.params;
  if (!isObjectIdValid(id)) {
    return res.status(400).json({ message: "ID inválido!" });
  }
  const post = await service.findPostByID(id);
  res.send(post);
}
async function createPost(req: Irequest, res: Response) {
  const { author, title, content, createdAt, image }: any = req.body;
  if (!image || content === "") {
    res.status(400).json({ message: "ID inválido" });
  } else {
    const payload = {
      author,
      title,
      content,
      createdAt,
      image,
    };
    await service.createPost(payload);
    res.status(200).json({ message: "Post criado com sucesso!" });
  }
}
async function updateById(req: Irequest, res: Response) {
  const id = req.params;
  if (!isObjectIdValid(id)) {
    return res.status(400).json({ message: "ID inválido!" });
  }
  const body = req.body;
  const post = await service.updatePost(id, body);
  res.send(post);
}
async function deleteByID(req: Irequest, res: Response) {
  const id = req.params;
  if (!isObjectIdValid(id)) {
    return res.status(400).json({ message: "ID inválido!" });
  }
  await service.deletePost(id);
  res.send({ message: "POst excluído com sucesso!" });
}
export default {
  findAllPost,
  findUserByID,
  createPost,
  updateById,
  deleteByID,
};
