import React from "react";
import { Modal, Form } from "react-bootstrap";

function RegistrationModal({ show, onClose, onSwitchToLogin }) {
  const handleRegistration = (e) => {
    e.preventDefault();
    onClose(); // Modalni yopish
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <h3 className="fs-5 fw-bold modal-title">Регистрация</h3>
      </Modal.Header>
      <div className="modal-body px-4">
        <Form onSubmit={handleRegistration}>
          <Form.Group className="mb-3">
            <Form.Label>Ваше имя</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Электронная почта или номер телефона</Form.Label>
            <Form.Control type="text" placeholder="+998" required />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Пароль" required />
          </Form.Group>
          <button type="submit" className="w-100 btn btn-warning text-white mb-2">
            Регистрация
          </button>
          <button
            type="button"
            className="w-100 btn btn-outline-secondary"
            onClick={onSwitchToLogin} // Login modalga o‘tish
          >
            Войти
          </button>
        </Form>
      </div>
    </Modal>
  );
}

export default RegistrationModal;
