import express from "express";
import jwt from "jsonwebtoken";
import { authController } from "../controller/authController.js";

export const authRouter = express.Router();

const secretKey = "palavra-chave-super-secreta"; // u924fnw9eufba9b5

//rota de registo
authRouter.post("/register", authController.registerUser);

// rota de login
authRouter.post("/login", authController.userLogin);
