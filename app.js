import express from "express";

import homeRoutes from "./routes/homeRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import infoRoutes from "./routes/infoRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`);
});

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Home routes
app.use(homeRoutes);

// About routes
app.use(aboutRoutes);

// Info routes
app.use(infoRoutes);

// Report routes
app.use(reportRoutes);
