import express from "express";
import { deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl";
import { createUrl } from "./../controllers/shortUrl";

const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
