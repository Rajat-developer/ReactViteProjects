require("dotenv").config();
const express = require("express");
// import  express  from 'express';
const app = express();
//const port = 3000;

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      title: "For Face",
      content: "Pears facewash",
    },
    {
      id: 2,
      title: "For Home",
      content: "Easy portable Mop",
    },
    {
      id: 3,
      title: "For Car",
      content: "Accessories",
    },
    {
      id: 4,
      title: "For Kitchen",
      content: "Oven",
    },
    {
      id: 5,
      title: "For MobilePhones",
      content: "BackCases, Tempered",
    },
  ];
  res.send(products);
});

const port = process.env.PORT || 3000;
app.listen(process.env.port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
