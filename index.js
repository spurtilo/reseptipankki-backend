const express = require("express");
const dotenv = require("dotenv").config();
let recipes = require("./data/recipes");

const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

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

app.delete("/api/recipes/:id", (req, res) => {
  const id = req.params.id;
  recipes = recipes.filter((recipe) => recipe.id !== id);

  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
