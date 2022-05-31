import express from "express";
import {
  showDataController,
  deleteDataController,
  dataDetailController,
} from "../controller/infoController.js";

const router = express.Router();

// show all data
router.get("/info", showDataController);

// delete data
router.get("/info/delete/:id", deleteDataController);

// data details
router.get("/info/:id", dataDetailController);

export default router;
