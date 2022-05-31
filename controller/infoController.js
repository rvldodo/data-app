import fs from "fs";
import { deleteData, findDataById } from "../utils/dataFunc.js";

export const showDataController = (req, res) => {
  const file = fs.readFileSync("./data/data.json", "utf-8");
  const data = JSON.parse(file);

  res.render("info", { data });
};

export const deleteDataController = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send(404);
  } else {
    deleteData(id);
    res.redirect("/info");
  }
};

export const dataDetailController = (req, res) => {
  const id = req.params.id;
  const data = findDataById(id);
  res.render("details", { data });
};
