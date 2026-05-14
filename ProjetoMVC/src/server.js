import ejs from "ejs";
import express from "express";
import path from "path";
import { router } from "./router.js";

//iniciando o app com express
import { fileURLToPath } from "url";

const app = express();

//pegando o diretorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//convigurando a view
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//usando os arquivos estaticos da aplicaçao
app.use(express.static("public"));

// comfigurando para ler dados da requisiçao
app.use(express.urlencoded({ extended: true }));

//usando rotas
app.use("/", router);

const PORT = process.env.PORT || 3000;

//configurando porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
