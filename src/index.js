import express from "express";

const app = express();
import renderer from "./helpers/renderer";

//making public repo static
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log("listeining on Port 3000");
});