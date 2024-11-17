import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Main from "./components/Main";
import RegistrationModal from "./components/RegistrationModal"; // Ro'yxatdan o‘tish modal
import LoginModal from "./components/LoginModal"; // Login modal
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sahifalar
import Tovar from "./pages/Tovar";
import Pastivshik from "./pages/Pastivshik";
import Vozvrat from "./pages/Vozvrat";
import Contakt from "./pages/Contakt";
import Novinki from "./pages/Novinki";
import Cart from "./pages/Cart";
import DetailPage from "./pages/DetailPage";
import LikedProducts from "./pages/LikedProducts";
import AllCategory from "./pages/AllCategory";
import AllProducts from "./pages/AllProducts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route
        path="tovar"
        element={
          <PrivateRoute>
            <Tovar />
          </PrivateRoute>
        }
      />
      <Route
        path="pastivshik"
        element={
          <PrivateRoute>
            <Pastivshik />
          </PrivateRoute>
        }
      />
      <Route
        path="vozvrat"
        element={
          <PrivateRoute>
            <Vozvrat />
          </PrivateRoute>
        }
      />
      <Route
        path="contakt"
        element={
          <PrivateRoute>
            <Contakt />
          </PrivateRoute>
        }
      />
      <Route
        path="novinki"
        element={
          <PrivateRoute>
            <Novinki />
          </PrivateRoute>
        }
      />
      <Route path="cart" element={<Cart />} />
      <Route path="likedProducts" element={<LikedProducts />} />
      <Route path="detail-page" element={<DetailPage />} />
      <Route path="allCategory" element={<AllCategory />} />
      <Route path="all-products" element={<AllProducts />} />
    </Route>
  )
);

function AppContent() {
  const { isAuthenticated } = useAuth(); // useAuth bu yerda ishlaydi
  const [showRegistrationModal, setShowRegistrationModal] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLogin = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(true);
  };

  const handleCloseModals = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(false);
  };

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      {!isAuthenticated && (
        <>
          <RegistrationModal
            show={showRegistrationModal}
            onClose={handleCloseModals}
            onSwitchToLogin={handleShowLogin}
          />
          <LoginModal show={showLoginModal} onClose={handleCloseModals} />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
