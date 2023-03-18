import service from "../service/post.service";
import { Request, Response } from "express";
import { IPost } from "../model/post.model";
import { isObjectIdValid } from "../utils/functionsUtils";

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
async function createUser(req: Irequest, res: Response) {
  const body = req.body;
  if (!body || body.content === "") {
    res.status(400).json({ message: "ID inválido" });
  } else {
    await service.createPost(body);
    res.status(200).json({ message: "Post Realizado com sucesso!" });
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
  res.send({ message: "Post deleted" });
}
export default {
  findAllPost,
  findUserByID,
  createUser,
  updateById,
  deleteByID,
};
