import ejs from "ejs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

app.use(express.urlencoded({ extended: true }));

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.senha = password;
  }
}

const storageUsers = [];

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const user = new User(username, email, password);

  storageUsers.push(user);

  res.redirect("/sucess");
});

app.get("/sucess", (req, res) => {
  res.render("sucess");
});

app.get("/user", (req, res) => {
  res.render("user", { users: storageUsers });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
