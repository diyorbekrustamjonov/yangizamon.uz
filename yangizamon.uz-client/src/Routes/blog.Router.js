import express from "express";
import controller from "#controllers/blog.Controller";

const router = express.Router()


router.get("/blog", controller.blogPage)
router.get("/blog/:blog_slug", controller.blogSinglePage)

export default router