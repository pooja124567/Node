
import express from 'express';
import { insertUser, login } from '../controller/auth.js';
import upload from '../middleware/multerConfig.js';

const routes = express.Router();

routes.post("/login", login);
routes.post("/register",upload.single("image"), insertUser);
routes.post("/login", login);

export default routes;
