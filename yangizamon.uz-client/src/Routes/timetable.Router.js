import express from "express";
import controller from "#controllers/timetable.Controller";

const router = express.Router()

router.get("/time-table", controller.timetablePage)

export default router