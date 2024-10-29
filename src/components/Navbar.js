import React, { useContext } from "react";
import logo from "./Images/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItemCount, likedProducts } = useContext(CartContext);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-4 container">
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Teplodom Logo"
              style={{ width: "60px", marginRight: "10px" }}
            />
            <div>
              <h3 style={{ color: "#FF5F00" }}>TEPLODOM</h3>
              {/* <p style={{ margin: 0, lineHeight: "1.2" }}>
                Интернет магазин <br /> строй материалов
              </p> */}
            </div>
          </div>
        </NavLink>
        <div className="input-container align-items-center position-relative">
          <CiSearch
            style={{ fontSize: "30px" }}
            className="position-absolute bg-transparent"
          />
          <input
            style={{
              paddingLeft: "35px",
              height: "40px",
              width: "400px",
              backgroundColor: "#FFFF",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className="d-flex gap-5 align-items-center justify-content-center">
          <NavLink
            to="/LikedProducts"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ position: "relative" }}>
              <FaRegHeart style={{ fontSize: "30px", cursor: "pointer"}} />
              {likedProducts.length > 0 && ( 
                <span
                  className="badge bg-danger"
                  style={{ position: "absolute", top: "-10px", right: "-16px" ,borderRadius: "50%"}}
                >
                  {likedProducts.length}
                </span>
              )}
            </div>
          </NavLink>

          <NavLink
            to="/Cart"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ position: "relative" }}>
              <RiShoppingBag4Line
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
              {cartItemCount > 0 && (
                <span
                  className="badge bg-danger"
                  style={{ position: "absolute", top: "-10px", right: "-16px" , borderRadius: "50%" }}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
          </NavLink>

          <button
            style={{
              backgroundColor: "#FFFF",
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "170px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <CgProfile style={{ fontSize: "30px", marginRight: "10px" }} />
            Профиль
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-5 mt-3">
        <NavLink to="/Tovar" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                width: "215px",
                height: "42px",
              }}
            >
              Товары по акции
            </button>
          )}
        </NavLink>
        <NavLink to="/Novinki" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                width: "133px",
                fontWeight: "600",
                borderRadius: "10px",
                height: "42px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Новинки
            </button>
          )}
        </NavLink>
        <NavLink to="/Pastivshik" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                width: "186px",
                height: "42px",
                borderRadius: "10px",
                fontWeight: "600",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Поставщикам
            </button>
          )}
        </NavLink>
        <NavLink to="/Contakt" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                width: "144px",
                borderRadius: "10px",
                fontWeight: "600",
                height: "42px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Контакты
            </button>
          )}
        </NavLink>
        <NavLink to="/Vozvrat" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                borderRadius: "10px",
                fontWeight: "600",
                width: "203px",
                height: "42px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Возврат товара
            </button>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
