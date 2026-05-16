import express from "express";
import { protectedRouter } from "./routes/protected.js";
import { authRouter } from "./routes/auth.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

app.listen(3000, () => console.log("Servidor iniciado!"));
