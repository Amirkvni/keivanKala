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
    setCart((prev) => {
      const updatedCart = prev.filter((product) => product._id != productID);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }
  function updateQuantity(productID, newQuantity) {
    setCart((prev) =>
      prev.map((item) =>
        item._id == productID ? { ...item, quantity: newQuantity } : item
      )
    );
  }
  function getTotal() {
    return cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }
  function getTotalDiscountPrice() {
    let total = 0;
    cart.forEach((item) => {
      if (item.discountPrice != null) {
        total += item.quantity * item.discountPrice;
      }
    });
    return total;
  }
  function addToRedirectPath(path) {
    setRedirecPath(path);
  }
  function decreaseFromCart(product) {
    setCart((prev) => {
      return prev
        .map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  }
  function getPayableAmount() {
    let total = 0;
    cart.forEach((item) => {
      const priceToUse = item.secondPrice ?? item.price;
      total += item.quantity * priceToUse;
    });
    return total;
  }
  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
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
        decreaseFromCart,
        getTotalDiscountPrice,
        getPayableAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
