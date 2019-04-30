//starting point for server side application
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

//making public repo static
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  //logic to initialize and load data into store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("listeining on Port 3000");
});