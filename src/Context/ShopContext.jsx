import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product"; // Import your products

export const ShopContext = createContext();

const getdefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getdefaultCart());

  const [state, setState] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems); // This will log the updated cartItems
  }, [cartItems]);

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    state,
    setState,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};