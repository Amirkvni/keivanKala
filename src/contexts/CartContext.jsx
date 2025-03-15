"use client";

import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [redirectPath, setRedirecPath] = useState("");
  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem("cart"));
    if (cartLocal) {
      setCart(cartLocal);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  function addToCart(product) {
    setCart((prev) => {
      let selectedProduct = prev.find((item) => item._id == product._id);
      if (!selectedProduct) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        return prev.map((item) =>
          item._id == product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    });
  }
  function removeFromCart(productID) {
    setCart((prev) => prev.filter((product) => product._id != productID));
  }
  function updateQuantity(productID, newQuantity) {
    setCart((prev) =>
      prev.map((item) =>
        item._id == productID ? { ...item, quantity: newQuantity } : item
      )
    );
  }
  function getTotal() {
    let total = 0;
    cart.forEach((item) => (total += item.quantity * item.price));
    return total;
  }
  function addToRedirectPath(path) {
    setRedirecPath(path);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        redirectPath,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        addToRedirectPath,
        setRedirecPath,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
