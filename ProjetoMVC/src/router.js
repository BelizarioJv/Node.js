import express from "express";
import { postsController } from "./controllers/postsController.js";

export const router = express.Router();

router.get("/", postsController.index);
router.get("/posts/:id", postsController.show);
