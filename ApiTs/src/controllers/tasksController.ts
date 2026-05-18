import type { Handler, Request, Response } from "express";
import { Task } from "../models/Task";
import { HttpError } from "../errors/HttpError";
import { z } from "zod";

// req.body { title, description, status, priority }
const StoreRequestSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"]),
});

const UpdateRequestSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["todo", "doing", "done"]).optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
});

export const taskController = {
  // GET /api/tasks
  index: (req: Request, res: Response) => {
    const tasks = Task.findAll();
    return res.json(tasks);
  },

  // POST /api/tasks
  store: (req: Request, res: Response) => {
    const parsedBody = StoreRequestSchema.parse(req.body);
    const newTask = Task.create(parsedBody);
    res.status(201).json(newTask);
  },

  // GET /api/tasks/:id
  show: (req: Request, res: Response) => {
    const { id } = req.params;
    const task = Task.findById(Number(id));
    if (!task) throw new HttpError(404, "task not found");
    res.json(task);
  },

  // PUT /api/tasks/:id
  update: (req: Request, res: Response) => {
    const { id } = req.params;
    const parsedBody = UpdateRequestSchema.parse(req.body);
    const updatedTask = Task.update(Number(id), parsedBody);
    if (!updatedTask) throw new HttpError(404, "task not found");
    res.json(updatedTask);
  },

  // DELETE /api/tasks/:id
  delete: (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedTask = Task.delete(Number(id));
    if (!deletedTask) throw new HttpError(404, "task not found");
    res.json(deletedTask);
  },
};
