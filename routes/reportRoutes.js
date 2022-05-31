import express from "express";
import {
  createDataController,
  formRenderController,
} from "../controller/reportController.js";

const router = express.Router();

// data report
router.get("/report", formRenderController);

// create data
router.post("/report", createDataController);

export default router;
