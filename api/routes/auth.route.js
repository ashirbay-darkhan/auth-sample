import express from "express";
import {google, sighup, signin} from "../controllers/auth.controller.js";

const router = express.Router()

router.post("/signup", sighup)
router.post("/signin", signin)
router.post("/google", google)


export default router