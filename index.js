const express = require("express");
const dotenv = require("dotenv").config();
let recipes = require("./data/recipes");

const app = express();
const morgan = require("morgan");

app.use(express.json());

morgan.token("reqData", function (req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :reqData"
  )
);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/:id", (req, res) => {
  const id = req.params.id;
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).end();
  }
});

app.post("/api/recipes", (req, res) => {
  const maxId =
    recipes.length > 0 ? Math.max(...recipes.map((n) => Number(n.id))) : 0;

  const recipe = req.body;
  recipe.id = String(maxId + 1);

  recipes = recipes.concat(recipe);

  res.json(recipe);
});

app.delete("/api/recipes/:id", (req, res) => {
  const id = req.params.id;
  recipes = recipes.filter((recipe) => recipe.id !== id);

  res.status(204).end();
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
