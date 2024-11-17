import React from "react";
import { useLocation } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

function DetailPage() {
  const location = useLocation();
  const { title, description, price, images } = location.state || {};

  return (
    <div className="container mt-4">
      <div className="card h-100 p-4" style={{ borderRadius: "10px" }}>
        <div className="d-flex align-items-center ;">
          <img
            src={images[0]}
            alt={title || "Mahsulot rasmi"}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "contain",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <div className="ml-4" style={{ flex: 1, paddingLeft: "20px" }}>
            <h3>{title}</h3>
            <p style={{ fontSize: "16px", color: "#555", width: "500px" }}>
              {description}
            </p>
            <h3 style={{ color: "red" }}>{price} сум</h3>
            <div className="quantity-controls">
              <button className="quantity-button">-</button>
              <span className="quantity">2</span>
              <button className="quantity-button">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
