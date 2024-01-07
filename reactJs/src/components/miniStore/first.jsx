import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

function MiniStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct) {
      setCart((prevCart) => [...prevCart, selectedProduct]);
      console.log(`Product added to cart: ${productId}`);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    console.log(`Product removed from cart: ${productId}`);
  };

  return (
    <div className="app-container">
      <h2 className="header">Products: {products.length}</h2>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              className="product-image"
              alt={product.title}
            />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-content">{product.content}</p>
              <div className="button-container">
                <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart: {cart.length} items</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiniStore;
