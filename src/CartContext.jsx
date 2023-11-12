// CartContext.js
import React, { createContext, useContext, useState } from 'react';
import ProductData from '../src/data'

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    // console.log(cart);
    return cart;
  }

  const decrease=(itemid)=>{

    let item = cart.find(item => item.id == itemid);

    if(item.count==1){
      return
    }
    item.count--;
    let newCart = cart.map((i) => {
      if (i.id === item.id) { 
        return item; 
      }
      else{
        return i;
      } 
    });
    setCart(newCart);
  }

  const addToCart = (itemid) => {
    let item = cart.find(item => item.id == itemid);
    // debugger
    if (item == undefined) {
      item = { ...ProductData[itemid - 1], count: 1 }
      setCart([...cart, item]);
    }
    else {
      item.count++;
      let newCart = cart.map((i) => {
        if (i.id === item.id) { 
          return item; 
        }
        else{
          return i;
        } 
      });
      setCart(newCart);

    }
  };


  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  }

  const updateCartItem = (itemId, updatedItem) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, getCart, clearCart , decrease}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
