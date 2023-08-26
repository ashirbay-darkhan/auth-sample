import express from "express";
import {sighup} from "../controllers/auth.controller.js";

const router = express.Router()

router.post("/signup", sighup)

export default router