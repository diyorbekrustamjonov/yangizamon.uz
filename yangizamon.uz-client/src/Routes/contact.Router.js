import express from "express";
import controller from "#controllers/contact.Controller";

const router = express.Router()


router.get("/contact", controller.contactPage)


export default router