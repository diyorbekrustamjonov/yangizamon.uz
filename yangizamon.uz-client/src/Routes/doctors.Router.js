import express from "express";
import controller from "#controllers/doctors.Controller";

const router = express.Router()

router.get("/doctors", controller.doctorsPage)

export default router