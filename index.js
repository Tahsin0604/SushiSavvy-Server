const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chef = require("./data/chef.json");
const recipes = require("./data/recipe.json");
//node cors
var cors = require("cors");
app.use(cors());

//get all chefs data
app.get("/chefs", (req, res) => {
  res.send(chef);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

//get details chefs data
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;

  const selectedChef = chef.find((c) => parseInt(c.id) === parseInt(id));
  const signatureDishes = recipes.filter(
    (r) => parseInt(r.chef_id) === parseInt(id)
  );
  selectedChef["signatureDishes"] = signatureDishes;
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Port number: ${port}`);
});
