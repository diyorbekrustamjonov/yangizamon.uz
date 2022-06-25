import express from "express";
import controller from "#controllers/home.Controller";

const router = express.Router()

router.get("/", controller.homePage)

export default router