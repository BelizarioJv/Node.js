import express from "express";
import { taskController as taskController } from "../controllers/tasksController";

export const taskRouter = express.Router();

taskRouter.get("/", taskController.index);
taskRouter.post("/", taskController.store);
taskRouter.get("/:id", taskController.show);
taskRouter.put("/:id", taskController.update);
taskRouter.delete("/:id", taskController.delete);
