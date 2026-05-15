import express from "express";
import { playlistController } from "./controller/playlistController.js";

export const router = express.Router();

router.get("/", playlistController.index);
router.get("/playlist/:id", playlistController.findPlaylistById);
router.post("/playlist/new", playlistController.newPlaylist);
router.post("/playlist/:id/addTag", playlistController.addTagsPlaylist);
