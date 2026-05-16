import { fileURLToPath } from "url";
import { router } from "./router.js";
import express from "express";
import session from "express-session";
import path from "path";
import ejs from "ejs";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "palavra-chave-secreta",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor inciado em <http://localhost>:${PORT}/`),
);
