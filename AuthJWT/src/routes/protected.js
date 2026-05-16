import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const protectedRouter = express.Router();

protectedRouter.get("/dashboard", authMiddleware, (req, res) => {
  const username = req.authenticatedUser.username;
  const role = req.authenticatedUser.role;

  if (role === "admin") {
    res.json({
      message: `Você está na área protegida. Bem-vindo(a), ${username} voce é um administrador!`,
    });
  } else {
    res.json({
      message: `Você está na área protegida. Bem-vindo(a), ${username}!`,
    });
  }
});
