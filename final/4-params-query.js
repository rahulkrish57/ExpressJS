const express = require("express");
const app = express();

const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  // res.json(products)
  const newProducts = products.map((product) => {
    const { name, id, image } = product;
    return {
      name,
      id,
      image,
    };
  });
  res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  // console.log(typeof(Number(productID)))

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    res.status(404).send("<h1>Product Does Not Exist</h1>");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  const { productID, reviewID } = req.params;
  res.send(reviewID);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if(sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search")
    return res.status(200).json({success:true,data:[]})
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("::: server listening on port 5000 :::");
});
