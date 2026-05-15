import express from "express";
import { fruitsController } from "./controller/fruitsController.js";
import { router } from "./router.js";

//Configurando App para usar servidor express e usar json para se comunicar
const app = express();
app.use(express.json());

//Rotas
app.use("/", router);

//Configuraçao porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
