import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

function LikedProducts() {
  const { likedProducts } = useContext(CartContext);

  // const truncateText = (text, wordCount) => {
  //   return text.split(" ").slice(0, wordCount).join(" ") + 
  //          (text.split(" ").length > wordCount ? "..." : "");
  // };

  if (!likedProducts || likedProducts.length === 0) {
    return <p className="container mt-4">Sizga yoqqan mahsulotlar mavjud emas.</p>;
  }

  return (
    <div className="container mt-4">
      <h3>Liked Products</h3>
      <div className="row mt-4">
        {likedProducts.map((item, index) => (
          <div className="col-md-12 mb-4" key={index}>
            <div className="card h-100 p-3">
              <div className="d-flex align-items-center">
                <img
                  src={item.images ? item.images[0] : ""}
                  alt={item.title || "Mahsulot rasmi"}
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                  }}
                />
                <div className="ml-4" style={{ flex: 1, paddingLeft: "20px" }}>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <p>
                    <h3 style={{ color: "red" }}>{item.price} сум</h3>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedProducts;
