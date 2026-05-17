import express from "express";
import { booksController } from "../controllers/booksController.js";
import { loansController } from "../controllers/loansController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const apiRouter = express.Router();

apiRouter.get("/books", booksController.index);
apiRouter.get("/books/:id", booksController.show);
apiRouter.post("/books", booksController.save);
apiRouter.put("/books/:id", booksController.update);
apiRouter.delete("/books/:id", booksController.delete);

apiRouter.get("/loans", loansController.index);
apiRouter.get("/loans/:id", loansController.show);
apiRouter.post("/loans", authMiddleware, loansController.save);
apiRouter.post("/loans/:id/return", loansController.return);
