// PrivateRoute.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import RegistrationModal from "../components/RegistrationModal";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && showModal) {
    return (
      <RegistrationModal show={showModal} onClose={() => setShowModal(false)} />
    );
  }

  return children;
};

export default PrivateRoute;
