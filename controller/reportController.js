import { addData } from "../utils/dataFunc.js";

export const formRenderController = (req, res) => {
  res.render("report");
};

export const createDataController = (req, res) => {
  addData(req.body);
  res.redirect("/info");
};
