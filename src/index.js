//starting point for server side application
import "babel-polyfill"; //define helper functions for babel, making use of async await syntax
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";

const app = express();

//making public repo static
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  //logic to initialize and load data into store
  matchRoutes(Routes, req.path);

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("listeining on Port 3000");
});