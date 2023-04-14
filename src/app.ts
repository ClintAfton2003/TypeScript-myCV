import express from "express";
import path from "path";
import indexRoutes from "./routes/index";
import { connect } from "./config/connect";

const app = express();
const port = 3000;

connect();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
