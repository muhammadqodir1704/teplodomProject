import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaDeleteLeft } from "react-icons/fa6";
import { TiDocumentAdd } from "react-icons/ti";
import Modal from "react-bootstrap/Modal";
import { CiCircleRemove } from "react-icons/ci";
function Cart() {
  const { cartItems, deleteCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOformitClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h3>Kорзине</h3>
      <div className="row mt-4">
        {cartItems.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={item.images[0]}
                alt={item.title}
                className="card-img-top mt-2"
                style={{ height: "160px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                  <strong>{item.price} сум</strong>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  style={{ color: "#fff", fontSize: "18px" }}
                  onClick={() => handleOformitClick(item)}
                >
                  <TiDocumentAdd
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontSize: "25px",
                    }}
                  />{" "}
                  Оформить
                </button>
                <button
                  onClick={() => deleteCart(item)}
                  style={{ fontSize: "30px", marginLeft: "10px", color: "red" }}
                  className="btn border-0"
                >
                  <FaDeleteLeft />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{
          borderRadius: "10px",
          backgroundColor: "rgba(0 , 0, 0, 0.4)",
        }}
      >
        <div closeButton>
          <h3 className="text-center">Оформление заказа</h3>
        </div>
        <Modal.Body>
          {selectedItem && (
            <div>
              <h5>Купить: {selectedItem.title}</h5>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>Введите Штук</p>
                      <input type="number" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>Введите номер телефона</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <p>Введите имя</p>
                  <input type="text" className="form-control" />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>Введите область</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>Введите город / район</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <p>Введите населённый пункт</p>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                  <p>Введите адрес</p>
                  <input type="text" className="form-control" />
                </div>
              </form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
          <btn
            style={{ color: "#fff" }}
            className=" btn btn-warning"
            variant="primary"
          >
            Оформить заказ
          </btn>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
