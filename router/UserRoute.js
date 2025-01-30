import express from "express";
import { getUser } from "../controller/User.js";

const routes = express.Router();
routes.get("/get-user",getUser);

export default routes;
