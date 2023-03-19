import mongoose from "mongoose";
import service from "../service/user.service";
import { IUser } from "../model/user.model";
import { Response } from "express";
import { isObjectIdValid, validBodyUser } from "../utils/functionsUtils";
import bcrypt from "bcrypt";
interface Irequest {
  params: string;
  body: IUser;
}

async function findAllUser(req: Irequest, res: Response) {
  const users = await service.findAllUser();
  res.send(users);
}

async function findUserByID(req: Irequest, res: Response) {
  const id = req.params;
  if (!isObjectIdValid(id)) {
    return res.status(400).json({ message: "ID inválido!" });
  }
  const user = await service.findUserByID(id);
  res.send(user);
}

async function createUser(req: Irequest, res: Response) {
  const body = req.body;
  if (!validBodyUser(body)) {
    res.status(400).json({ message: "Não foi possivel criar o usuário!" });
  }

  const users = await service.findAllUser();

  const checkEmail = users.some((user) => user.email === body.email);

  if (checkEmail) {
    return res.status(422).json({
      message: "Email já cadastrado!",
    });
  }

  await service.createUser(body);
  res.status(200).json({ message: "Usuário criado com sucesso!" });
}

async function updateById(req: Irequest, res: Response) {
  const id = req.params;
  if (!isObjectIdValid(id)) {
    return res.status(400).json({ message: "ID inválido!" });
  }
  const body = req.body;
  const user = await service.updateUser(id, body);
  res.send(user);
}

async function deleteByID(req: Irequest, res: Response) {
  const id = req.params;
  if (!isObjectIdValid(id)) {
    return res.status(400).json({ message: "ID inválido!" });
  }
  await service.deleteUser(id);
  res.send({ message: "Usuario excluído com sucesso!" });
}

async function loginUser(req: Irequest, res: Response) {
  const users = await service.findAllUser();
  const body = req.body;
  const checkEmail = users.some((user) => user.email === body.email);
  if (!checkEmail) {
    await service.createUser(body);
    res.status(200).json({ message: "Usuário criado com sucesso!" });
  } else {
    res.status(200).json({ message: "Usuário já cadastrado!" });
  }
}

export default {
  findAllUser,
  findUserByID,
  createUser,
  updateById,
  deleteByID,
  loginUser,
};
