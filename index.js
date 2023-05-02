const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chef = require("./data/chef.json");
var cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Chef Recipe Hunter Api");
});
app.get("/chefs", (req, res) => {
  res.send(chef);
});
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chef.find((c) => parseInt(c.id) === parseInt(id));
  console.log(selectedChef);
  res.send(selectedChef);
});
app.listen(port, () => {
  console.log(`Port number: ${port}`);
});
