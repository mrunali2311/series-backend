import express from "express";
import { getAllSeries, createSeries } from "../controllers/seriesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllSeries);
router.post("/", authMiddleware, createSeries);

export default router;
