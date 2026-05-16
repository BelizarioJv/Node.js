import { users, usersStorage } from "../models/users.js";
import jwt from "jsonwebtoken";

const secretKey = "palavra-chave-super-secreta";

export const authController = {
  registerUser: (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User(username, email, password);

    if (!username || !email || !password) {
      return res.status(401).json({ message: "Invalid crendentials" });
    }

    const alreadyUseEmail = users.findByEmail(email);
    if (!alreadyUseEmail) {
      usersStorage.push(user);
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(201).json(user);
  },

  userLogin: (req, res) => {
    const { username, password } = req.body;

    const user = usersStorage.find((user) => user.username === username);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Guardando o username como a propriedade a ser usada no token JWT
    const payload = { username };

    //criando token usadno o corpo , a chave secreta e o tempo q o token vai permanecer valido
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

    res.json({ token });
  },

  deleteUser: (req, res) => {
    const { id } = req.params;

    const user = users.findById(id);

    if (user.role === "admin") {
      usersStorage.slice(user, 1);
      return res.status(201).json({ message: "usuario deletado com sucesso" });
    } else {
      return res
        .status(401)
        .json({ message: "somente administradores podem excluir usuarios" });
    }
  },
};
