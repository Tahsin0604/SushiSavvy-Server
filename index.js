const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chef = require("./data/chef.json");
//node cors
var cors = require("cors");
app.use(cors());

//get all chefs data
app.get("/chefs", (req, res) => {
  res.send(chef);
});

//get details chefs data
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
