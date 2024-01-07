import { Router } from "express";
import { get, getAll } from "../controllers/controllers.js";

const router = Router()

router.get("/", get)
router.get("/all", getAll)

export default router;