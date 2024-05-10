import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();

router.use(protectRoute);

router.get("/", getAllUsers)

export default router;