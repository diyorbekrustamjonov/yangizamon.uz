import express  from "express";
import homeRouter from "#routes/home.Router";
import aboutRouter from "#routes/about.Router";
import doctorsRouter from "#routes/doctors.Router";
import timetableRouter from "#routes/timetable.Router";
import pricingRouter from "#routes/pricing.Router";
import blogRouter from "#routes/blog.Router";
import diseaseRouter from "#routes/disease.Router";
import contactRouter from "#routes/contact.Router";


const router = express.Router();

router.use(homeRouter)
router.use(aboutRouter)
router.use(doctorsRouter)
router.use(timetableRouter)
router.use(pricingRouter)
router.use(blogRouter)
router.use(diseaseRouter)
router.use(contactRouter)

export default router;
