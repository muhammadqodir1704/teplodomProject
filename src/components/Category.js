import React from "react";
import Cat1 from "./Images/categor1.png";
import Cat2 from "./Images/categor2.png";
import Cat3 from "./Images/categor3.png";
import Cat4 from "./Images/categor4.png";
import Cat5 from "./Images/categor5.png";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div style={{ marginBottom: "150px" }} className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Категории</h2>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to="/allcategory"
        >
          <a href="#" style={allCategoriesStyle}>
            Все категории &gt;
          </a>
        </NavLink>
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
          <img src={Cat1} alt="Категория 1" style={imgStyle} />
          <p style={textStyle}>Сухи смеси</p>
        </div>
        <div style={cardStyle}>
          <img src={Cat2} alt="Категория 2" style={imgStyle} />
          <p style={textStyle}>Хоз товары</p>
        </div>
        <div style={cardStyle}>
          <img src={Cat3} alt="Категория 3" style={imgStyle} />
          <p style={textStyle}>Лакокрасочная материалы</p>
        </div>
        <div style={cardStyle}>
          <img src={Cat4} alt="Категория 4" style={imgStyle} />
          <p style={textStyle}>Изоляционные материалы</p>
        </div>
        <div style={cardStyle}>
          <img src={Cat5} alt="Категория 5" style={imgStyle} />
          <p style={textStyle}>Саморезы</p>
        </div>
        <div style={cardStyle}>
          <img src={Cat5} alt="Категория 6" style={imgStyle} />
          <p style={textStyle}>Саморезы</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "160px",
  height: "202px",
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

export default Category;
