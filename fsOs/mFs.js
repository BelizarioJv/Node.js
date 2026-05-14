import fs from "fs";

// Criar arquivo
export const createFile = fs.writeFileSync(
  "./arquivo.csv",
  "exercicios aula 1",
);

// Reescrever arquivo
const newContent = "esses são os novos dados do arquivo";
export const rewriteFile = fs.writeFileSync("./arquivo.csv", newContent);

// Ler arquivo
export const readFile = fs.readFileSync("./arquivo.csv", "utf-8");
console.log(readFile);

// Deletar arquivo
export const delteFile = fs.unlinkSync("./arquivo.csv");
console.log("arquivo deletado com sucesso");
