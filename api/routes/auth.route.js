import express from "express";
import {google, sighup, signin, signout} from "../controllers/auth.controller.js";

const router = express.Router()

router.post("/signup", sighup)
router.post("/signin", signin)
router.post("/google", google)
router.get("/signout", signout)


export default router