import jwt from "jsonwebtoken";
import { users } from "../models/users.js";

const secretKey = "palavra-chave-super-secreta";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, secretKey);

    const user = users.find((user) => user.username === decodedToken.username);
    if (!user) {
      return res.status(401).json({ message: "Invalid user" });
    }

    const userRole = users.find((user) => user.role === decodedToken.role);

    req.authenticatedUser = user;
    req.authenticatedRole = role;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
