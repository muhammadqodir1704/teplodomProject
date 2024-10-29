import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

function Products() {
  const { addToCart, addToLikedProducts, likedProducts } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  const handleLikeButtonClick = (product) => {
    addToLikedProducts(product);
  };

  const truncateText = (text, wordCount) => {
    return (
      text.split(" ").slice(0, wordCount).join(" ") +
      (text.split(" ").length > wordCount ? "..." : "")
    );
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Новинки на сайте</h2>
        <NavLink
          style={{ textDecoration: "none", color: "inherit" }}
          to="/all-products"
        >
          <a href="#" style={allCategoriesStyle}>
            Смотреть все
          </a>
        </NavLink>
      </div>
      <div className="row">
        {products.slice(0, 8).map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.images[0]}
                alt={product.title}
                className="card-img-top mt-2"
                style={{ height: "160px", objectFit: "contain" }}
              />
              <div className="card-body">
                <NavLink
                  to="/detail-page"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h5 className="card-title">
                    {truncateText(product.title, 2)}
                  </h5>
                  <p className="card-text">
                    {truncateText(product.description, 4)}
                  </p>
                </NavLink>
                <p className="card-text">
                  <strong>{product.price} сум</strong>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  style={{ color: "#fff", fontSize: "18px" }}
                  onClick={() => addToCart(product)}
                >
                  <MdAddShoppingCart
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontSize: "25px",
                    }}
                  />{" "}
                  В корзину
                </button>
                <button
                  className="border-0 p-0 bg-transparent"
                  onClick={() => handleLikeButtonClick(product)}
                >
                  <FaRegHeart
                    style={{
                      fontSize: "30px",
                      color: likedProducts.some(
                        (item) => item.id === product.id
                      )
                        ? "red"
                        : "#ffb12a",
                      backgroundColor: likedProducts.some(
                        (item) => item.id === product.id
                      )
                        ? "#ffb12a"
                        : "transparent",
                      borderRadius: "50%",
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

export default Products;
