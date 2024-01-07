import { Router } from "express";
import { get } from "../controllers/controllers.js";

const router = Router()

router.get("/", get)

export default router;