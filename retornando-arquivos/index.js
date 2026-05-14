import express from "express";

const app = express();
const port = 300;

app.listen(port, () => {
  console.log("Servidor rodando na porta 3000");
});
