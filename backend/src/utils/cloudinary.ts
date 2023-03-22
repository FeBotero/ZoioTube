import cloudinary from "cloudinary";
import "dotenv/config";

//Configuração de parametros para montagem da url do Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_STORAGE_NAME,
  api_key: process.env.CLOUDINARY_STORAGE_API_KEY,
  api_secret: process.env.CLOUDINARY_STORAGE_API_SECRET,
});

export = cloudinary;
