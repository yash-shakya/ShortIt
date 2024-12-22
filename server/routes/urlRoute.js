import express from "express";
import { shortUrl,redirectToUrl,getUrls,getUser } from "../controller/urls.js";

const router=express.Router();

router.post("/create",shortUrl);
router.get("/getUrls",getUrls);
router.get("/getUser",getUser);
router.get("/:shortId",redirectToUrl);

export default router