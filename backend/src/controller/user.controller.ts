import mongoose from "mongoose";
import service from "../service/user.service";
import User, { Iuser } from "../model/user.model";
import { Response } from "express";
import { isObjectIdValid, validBodyUser } from "../utils/functionsUtils";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

interface Irequest {
  params: string;
  body: Iuser;
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
  const user = users.find((u: any) => u.email === body.email);

  const checkEmail = users.some((user: any) => user.email === body.email);

  if (checkEmail) {
    return res
      .status(422)
      .json({
        message: "Email já cadastrado!",
      })
      .send(user);
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
  try {
    const { email, password: passBody } = req.body;
    console.log(email);

    if (!email || !passBody)
      return res.status(400).json({ message: "Erro nos dados!" });

    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Email ou senha incorreto!" });

    await bcrypt.compare(passBody, user.password);

    const secret = process.env.SECRET || "";
    const access_token = sign(
      {
        user,
      },
      secret
    );

    res.status(200).json({
      id: user._id,
      access_token: access_token,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Aconteceu algo no servidor, tente novamente mais tarde.",
    });
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
