import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

function Novinki() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  const truncateText = (text, wordCount) => {
    return (
      text.split(" ").slice(0, wordCount).join(" ") +
      (text.split(" ").length > wordCount ? "..." : "") 
    );
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
        <h2>Новинки</h2>
        <a href="#" style={allCategoriesStyle}>
          Смотреть все
        </a>
      </div>
      <div className="row">
        {products.slice(8, 16).map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div style={{ backgroundColor: "#fff" }} className="card h-100">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top mt-2"
                style={{ height: "160px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{truncateText(product.title, 2)}</h5>
                <p className="card-text">
                  {truncateText(product.description, 4)}
                </p>
                <p className="card-text">
                  <strong>{product.price} сум</strong>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  style={{ color: "#fff", fontSize: "18px" }}
                >
                  <i className="bi bi-cart"></i>{" "}
                  <MdAddShoppingCart
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontSize: "25px ",
                    }}
                  />{" "}
                  В корзину
                </button>
                <button className="btn">
                  <FaRegHeart
                    style={{
                      backgroundColor: "#ffb12a",
                      color: "#fff",
                      width: "44px",
                      height: "42px",
                      padding: "6px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const allCategoriesStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
};

export default Novinki;
