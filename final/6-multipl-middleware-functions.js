const express = require("express");
const app = express();
const logger = require('./logger');
const authorize = require('./authorize')

//app.use( path, callback )
// app.use(logger); middleware... Always place middleware first and then all route methods
app.use([logger, authorize])

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});


app.listen(5000, () => {
  console.log("::: server listening on port 5000 :::");
});
