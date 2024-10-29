import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Main from "./components/Main";
import Tovar from "./pages/Tovar";
import Pastivshik from "./pages/Pastivshik";
import Vozvrat from "./pages/Vozvrat";
import Contakt from "./pages/Contakt";
import Novinki from "./pages/Novinki";
import Cart from "./pages/Cart";
import DetailPage from "./pages/DetailPage";
import LikedProducts from "./pages/LikedProducts";
import { ToastContainer } from "react-toastify";
import AllCategory from "./pages/AllCategory";
import AllProducts from "./pages/AllProducts";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="tovar" element={<Tovar />} />
      <Route path="pastivshik" element={<Pastivshik />} />
      <Route path="vozvrat" element={<Vozvrat />} />
      <Route path="contakt" element={<Contakt />} />
      <Route path="novinki" element={<Novinki />} />
      <Route path="cart" element={<Cart />} />
      <Route path="likedProducts" element={<LikedProducts />} />
      <Route path="detail-page" element={<DetailPage />} />
      <Route path="allCategory" element={<AllCategory />} />
      <Route path="all-products" element={<AllProducts />} />
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
