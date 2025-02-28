import express from "express";

import { getFile } from "../controller/file.js";
import upload from "../middleware/multerConfig.js";

const routes = express.Router();

routes.post("/file-upload", upload.array("images", 3), getFile);

export default routes;