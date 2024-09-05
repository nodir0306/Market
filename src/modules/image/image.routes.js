import { Router } from "express";
import homeImageController from "./image.controller.js";

const imageRoutes = Router();
imageRoutes
    .get("/:image",homeImageController.getHomeImages)

export default imageRoutes