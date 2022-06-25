import express from "express";
import controller from "#controllers/about.Controller";

const router = express.Router()

router.get("/about", controller.aboutPage)

export default router