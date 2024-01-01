require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      title: "For Face",
      content: "Pears facewash",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51b97n6roFL.jpg",
    },
    {
      id: 2,
      title: "For Home",
      content: "Easy portable Mop",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Kp4DvobzL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "For Car",
      content: "Accessories",
      imageUrl:
        "https://www.mycarhelpline.com/images/easyblog_articles/570/Car-Accessories.jpg",
    },
    {
      id: 4,
      title: "For Kitchen",
      content: "Oven",
      imageUrl:
        "https://www.lg.com/in/images/microwave-ovens/md05265262/gallery/MC3286BRUM-microwave-ovens-Front-view-D-01.jpg",
    },
    {
      id: 5,
      title: "For Mobile Phones",
      content: "BackCases, Tempered",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41CbCxKNfzL.jpg",
    },
    {
      id: 6,
      title: "For Computers",
      content: "Screenguard",
      imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61UXD-p9D-L.jpg",
        
    },
  ];
  res.send(products);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
