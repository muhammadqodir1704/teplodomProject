import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout({ onLogin, onRegister }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar onLogin={onLogin} onRegister={onRegister} />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
