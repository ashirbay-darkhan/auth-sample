import express from "express";
import {sighup, signin} from "../controllers/auth.controller.js";

const router = express.Router()

router.post("/signup", sighup)
router.post("/signin", signin)

export default router