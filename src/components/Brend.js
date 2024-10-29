import React from "react";
import Brend1 from "./Images/brend1.png";
import Brend2 from "./Images/brend2.png";
import Brend3 from "./Images/brend3.png";
import Brend4 from "./Images/brend4.png";
import Brend5 from "./Images/brend5.png";
function Brend() {
  return (
    <div style={{ marginBottom: "150px" }} className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Бренды</h2>
        <a href="#" style={allCategoriesStyle}>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <img src={Brend1} alt="Категория 1" style={imgStyle} />
        </div>
        <div style={cardStyle}>
          <img src={Brend2} alt="Категория 2" style={imgStyle} />
        </div>
        <div style={cardStyle}>
          <img src={Brend3} alt="Категория 3" style={imgStyle} />
        </div>
        <div style={cardStyle}>
          <img src={Brend4} alt="Категория 4" style={imgStyle} />
        </div>
        <div style={cardStyle}>
          <img src={Brend5} alt="Категория 5" style={imgStyle} />
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "193px",
  height: "181px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  textAlign: "center",
  marginBottom: "20px",
  gap: "100px",
};

const imgStyle = {
  width: "100%",
  height: "auto",
  marginBottom: "10px",
};

const textStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
  color: "#333",
};

const allCategoriesStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
};

export default Brend;
