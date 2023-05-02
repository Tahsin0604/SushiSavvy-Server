const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chef = require("./data/chef.json");
app.get("/", (req, res) => {
  res.send("Chef Recipe Hunter Api");
});
app.get("/chefs", (req, res) => {
  res.send(chef);
});
app.listen(port, () => {
  console.log(`Port number: ${port}`);
});
