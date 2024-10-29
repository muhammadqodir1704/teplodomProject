import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cartItems, deleteCart } = useContext(CartContext);

  const truncateText = (text, wordCount) => {
    return (
      text.split(" ").slice(0, wordCount).join(" ") +
      (text.split(" ").length > wordCount ? "" : "")
    );
  };

  return (
    <div className="container mt-4">
      <h3>Kорзине</h3>
      <div className="row mt-4">
        {cartItems.map((item, index) => (
          <div className="col-md-12 mb-4" key={index}>
            <div className="card h-100 p-3">
              <div className="d-flex align-items-center">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                  }}
                />
                <div className="ml-4" style={{ flex: 1, paddingLeft: "20px" }}>
                  <h5>{item.title}</h5>
                  <p>{truncateText(item.description, 20)}</p>
                  <p>
                    <h3 style={{ color: "red" }}>{item.price} сум</h3>
                  </p>
                  <div className="d-flex justify-content-start align-items-center">
                    <button className="btn btn-success">Rasmiylashtirish</button>
                    <button 
                      onClick={() => deleteCart(item)} 
                      style={{fontSize: "30px" , marginLeft: "40px",  color: "red"}} 
                      className="btn"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
