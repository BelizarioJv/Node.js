import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./router/authRouter.js";
import { apiRouter } from "./router/apiRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/api", apiRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
