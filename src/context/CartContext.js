import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const notifyAdd = () => toast.success("Mahsulot qoʻshildi!");
const notifyDelete = () => toast.error("Mahsulot o'chirildi!");
const notifyLike = () => toast.warning("Mahsulot sevimliga qoʻshildi!");

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [likedProducts, setLikedProducts] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (!exists) {
        notifyAdd();
        setCartItemCount((count) => count + 1);
        return [...prevItems, product];
      }
      toast.info("Mahsulotni savatga qo'shgansiz");
      return prevItems;
    });
  };

  const addToLikedProducts = (product) => {
    setLikedProducts((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (!exists) {
        notifyLike();
        return [...prevItems, product];
      } else {
        toast.info("Mahsulot sevimlilar ro'yxatidan o'chirildi");
        return prevItems.filter((item) => item.id !== product.id);
      }
    });
  };

  const deleteCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== product.id);
      if (updatedItems.length !== prevItems.length) {
        notifyDelete();
        setCartItemCount((count) => count - 1);
      }
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteCart,
        cartItemCount,
        addToLikedProducts,
        likedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
