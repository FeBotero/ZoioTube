import express from "express";
import controller from "../controller/post.controller";

const router = express.Router();

router.get("/", controller.findAllPost);
router.get("/:id", controller.deleteByID);
router.post("/", controller.createPost);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteByID);
export = router;
