import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";
import DB from "./db/db.helprs";

const app = express();

async function main() {
  await DB.connectDB();

  app.use(cors());
  app.use(express.json());
  app.use("/user", userRoutes);
  app.use("/post", postRoutes);

  app.get("/", function (req: Request, res: Response) {
    res.send("Olá Brasil!!");
  });

  app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
}
main();
