import express from "express";
import controller from "#controllers/disease.Controller";

const router = express.Router()


router.get("/disease", controller.diseasePage)
router.get("/disease:disease_id", controller.diseaseSinglePage)


export default router