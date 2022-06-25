import express from "express";
import controller from "#controllers/pricing.Controller";

const router = express.Router()

router.get("/pricing", controller.pricingPage)

export default router