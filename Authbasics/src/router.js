import express from "express";
import { authController } from "./controllers/auth-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { authMiddleware } from "./middleware/auth-middleware.js";
import { ensureUserIsAdmin } from "./middleware/auth-middleware.js";

export const router = express.Router();

router.get("/", authController.index);
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/auth/logout", authMiddleware, authController.logout);

router.get("/dashboard", authMiddleware, dashboardController.dashboard);

router.get(
  "/dashboard/users",
  authMiddleware,
  ensureUserIsAdmin,
  dashboardController.users,
);
