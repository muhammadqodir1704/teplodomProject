import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Png from "./Images/footerPng.png";

function Footer() {
  const transparentStyle = {
    backgroundColor: "transparent",
  };

  return (
    <div
      className="footer"
      style={{ color: "white", backgroundColor: "#2D2B45" }}
    >
      <footer
        className="container-fluid py-5"
        style={{ backgroundColor: "#2D2B45" }}
      >
        <div style={transparentStyle} className="container">
          <div
            className="row justify-content-between align-items-center"
            style={transparentStyle}
          >
            <div className="col-md-4" style={transparentStyle}>
              <div
                className="d-flex gap-2 align-items-center"
                style={transparentStyle}
              >
                <img
                  src={Png}
                  alt="logo"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    ...transparentStyle,
                  }}
                />
                <div style={transparentStyle}>
                  <h2
                    style={{
                      fontSize: "26px",
                      color: "white",
                      ...transparentStyle,
                    }}
                  >
                    TEPLODOM
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.5px",
                      color: "white",
                      ...transparentStyle,
                    }}
                  >
                    Интернет магазин
                    <br />
                    строй материалов
                  </p>
                </div>
              </div>
              <div
                className="d-none d-sm-flex mt-3 gap-2"
                style={transparentStyle}
              >
                <FaLocationDot
                  style={{
                    fontSize: "30px",
                    width: "18px",
                    color: "white",
                    ...transparentStyle,
                  }}
                />
                <p style={{ color: "white", ...transparentStyle }}>
                  ул.Уста Ширин, рынок <br /> Джамий, дом 134
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3 my-md-0" style={transparentStyle}>
              <h3
                style={{
                  fontSize: "20px",

                  color: "white",
                  ...transparentStyle,
                }}
              >
                Быстрые ссылки
              </h3>
              <ul
                className="list-unstyled mt-3"
                style={{
                  color: "white",
                  ...transparentStyle,
                }}
              >
                <li style={transparentStyle}>Мастерам</li>
                <li style={transparentStyle}>Оформление заказа</li>
                <li style={transparentStyle}>Пользовательское соглашение</li>
              </ul>
            </div>
            <div className="col-md-2 my-3 my-md-0" style={transparentStyle}>
              <h3
                style={{
                  fontSize: "18px",
                  color: "white",
                  ...transparentStyle,
                }}
              >
                Полезное
              </h3>
              <ul
                className="list-unstyled mt-3"
                style={{ color: "white", ...transparentStyle }}
              >
                <li style={transparentStyle}>О нас</li>
                <li style={transparentStyle}>Поставщикам</li>
                <li style={transparentStyle}>Возврат товара</li>
              </ul>
            </div>
            <div className="col-md-3 my-3 my-md-0" style={transparentStyle}>
              <h3
                style={{
                  fontSize: "18px",
                  color: "white",
                  ...transparentStyle,
                }}
              >
                Контакты
              </h3>
              <ul
                className="list-unstyled mt-3"
                style={{ color: "white", ...transparentStyle }}
              >
                <li
                  className="d-flex gap-2 align-items-center"
                  style={transparentStyle}
                >
                  <FaPhoneAlt style={{ color: "white", ...transparentStyle }} />
                  <a
                    href="tel:+998916977181"
                    style={{ color: "white", ...transparentStyle }}
                  >
                    +998 97 761 62 51
                  </a>
                </li>
                <li
                  className="d-flex gap-2 align-items-center my-1"
                  style={transparentStyle}
                >
                  <FaPhoneAlt style={{ color: "white", ...transparentStyle }} />
                  <a
                    href="tel:+998916977181"
                    style={{ color: "white", ...transparentStyle }}
                  >
                    +998 97 761 62 51
                  </a>
                </li>
                <li className="d-flex gap-2" style={transparentStyle}>
                  <a href="#" style={{ color: "white", ...transparentStyle }}>
                    <FaTelegram size={24} />
                  </a>
                  <FaInstagram
                    size={24}
                    style={{ color: "white", ...transparentStyle }}
                  />
                  <FaFacebook
                    size={24}
                    style={{ color: "white", ...transparentStyle }}
                  />
                  <FaYoutube
                    size={24}
                    style={{ color: "white", ...transparentStyle }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top border-light"
            style={transparentStyle}
          >
            <div
              className="d-none d-md-block"
              style={{ width: "30%", height: "1px", backgroundColor: "white" }}
            ></div>
            <p
              className="text-center"
              style={{ fontSize: "15px", color: "white", ...transparentStyle }}
            >
              &copy; {new Date().getFullYear()} Teplodom. Все права защищены
            </p>
            <div
              className="d-none d-md-block"
              style={{ width: "30%", height: "1px", backgroundColor: "white" }}
            ></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
