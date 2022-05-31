import fs from "fs";
import { v4 as uuid } from "uuid";

const loadData = () => {
  const file = fs.readFileSync("data/data.json", "utf8");
  const data = JSON.parse(file);
  return data;
};

const saveData = (data) => {
  fs.writeFileSync("data/data.json", JSON.stringify(data));
};

export const addData = (newData) => {
  const data = loadData();
  data.push({ ...newData, id: uuid() });
  saveData(data);
};

export const findDataById = (id) => {
  const data = loadData();
  const oneData = data.find((db) => db.id === id);
  return oneData;
};

export const deleteData = (id) => {
  const data = loadData();
  const newData = data.filter((db) => db.id !== id);

  saveData(newData);
};

export const duplicateDataCheck = (req) => {
  const data = loadData();
  // data.forEach((db) => db.)
};
