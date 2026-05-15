import express from "express";
import { fruitsController } from "./controller/fruitsController.js";

export const router = express.Router();

router.get("/", fruitsController.index);
router.get("/fruits/:id", fruitsController.showFruitById);
router.post("/fruit", fruitsController.saveFruit);
router.post("/fruit/:id/color", fruitsController.addColor);
router.put("/fruit/:id/edit", fruitsController.editFruit);
router.delete("/fruit/:id", fruitsController.deleteFruit);
router.delete("/fruit/:id/deleteColor", fruitsController.deleteColorFruit);
