import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function RegistrationModal({ show, onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    onClose();
  };

  const styles = {
    modal: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    btnWarning: {
      backgroundColor: "#fca503",
      border: "none",
      padding: "12px",
      fontSize: "16px",
      fontWeight: "600",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#e89400",
      },
    },
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    eyeButton: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#6c757d",
      marginTop: "12px",
      fontSize: "20px",
    },
    formControl: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      fontSize: "15px",
    },
    formLabel: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#495057",
      marginBottom: "8px",
    },
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      style={{ ...styles.backdrop, ...styles.modal }}
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <h3 className="fs-5 fw-bold modal-title">Регистрация</h3>
      </Modal.Header>
      <div className="modal-body px-4">
        <div className="text-end mb-4">
          <span>
            Имеете аккаунт?{" "}
            <a
              href="#"
              style={styles.link}
              onMouseOver={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              Войти
            </a>
          </span>
        </div>
        <Form onSubmit={handleRegistration}>
          <Form.Group className="mb-3">
            <Form.Label style={styles.formLabel}>Ваше имя</Form.Label>
            <Form.Control type="text" required style={styles.formControl} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={styles.formLabel}>
              Электронная почта или номер телефона
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="+998"
              required
              style={styles.formControl}
            />
          </Form.Group>
          <Form.Group className="mb-4 position-relative">
            <Form.Label style={styles.formLabel}>Пароль</Form.Label>
            <Form.Control
              type={passwordVisible ? "text" : "password"}
              placeholder="Пароль"
              required
              style={styles.formControl}
            />
            <Button
              variant="link"
              style={styles.eyeButton }
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </Form.Group>
          <button
            type="submit"
            style={styles.btnWarning}
            className="w-100 text-white mb-3"
          >
            Регистрация
          </button>
        </Form>
      </div>
    </Modal>
  );
}

export default RegistrationModal;
