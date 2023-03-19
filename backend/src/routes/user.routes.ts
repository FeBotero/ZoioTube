import express from "express";
import controller from "../controller/user.controller";

const router = express.Router();

router.get("/", controller.findAllUser);
router.get("/:id", controller.findUserByID);
router.post("/", controller.createUser);
router.post("/login", controller.loginUser);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteByID);

export = router;
