import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.URL || "";

mongoose.set("strictQuery", true);

function connectDB() {
  return mongoose
    .connect(url)
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch((error) => console.log("Erro na conexão com bando de dados", error));
}

export default { connectDB };
