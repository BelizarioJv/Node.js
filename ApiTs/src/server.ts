import express from "express";
import { taskRouter } from "./router/tasksRouter";
import { errorHandler } from "./middlewares/errorMiddleware";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", taskRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
