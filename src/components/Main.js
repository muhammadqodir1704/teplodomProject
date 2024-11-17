import React from "react";
import mainBack from "./Images/mainBack.png";
import Karousel from "./Images/carousel.png";
import Car from "./Images/carousel3.png";
import Prod from "./Images/carousel2.png";
import Category from "../components/Category";
import Products from "../components/Products";
import Brend from "../components/Brend";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Penopleks from "./Images/penopleks.png";
import Knauf from "./Images/knauf.png";
import Wool2 from "./Images/wool-2.png";
import Wool1 from "./Images/wool-1.png";
import Wood from "./Images/wood.png";
import "swiper/css";
import "swiper/css/pagination"; 

function Main() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-5"
        style={{ maxWidth: "1200px", height: "420px" }}
      >
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={mainBack}
              alt="Product 1"
              className="slide-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <img
              src={Penopleks}
              alt="penopleks"
              style={{
                position: "absolute",
                top: "10px",
                right: "40px",
                background: "transparent",
                width: "321px",
                height: "401px",
              }}
            />
            <div
              style={{
                position: "absolute",
                background: "transparent",
                top: "50px",
                left: "50px",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <h1
                style={{
                  background: "transparent",
                  width: "456px",
                  height: "58px",
                  fontWeight: "700",
                }}
              >
                Пеноплекс Основа
              </h1>
              <p
                style={{
                  background: "transparent",
                  width: "645px",
                  height: "145px",
                  fontWeight: "500",
                }}
              >
                Пеноплэкс» — российская компания, производитель <br /> тепло- и
                гидроизоляционных, а также декоративно- <br />
                отделочных материалов на основе полимеров,
                <br /> основной вид продукции — теплоизоляционные <br /> плиты
                из экструзионного пенополистирола
              </p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={Karousel}
              alt="Product 2"
              className="slide-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <img
              src={Knauf}
              alt="knauf"
              style={{
                position: "absolute",
                top: "50px",
                right: "20px",
                background: "transparent",
                width: "471px",
                height: "327px",
              }}
            />
            <div
              style={{
                position: "absolute",
                background: "transparent",
                top: "50px",
                left: "50px",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <h1
                style={{
                  background: "transparent",
                  width: "456px",
                  height: "58px",
                  fontWeight: "700",
                }}
              >
                Гипсакартон
              </h1>
              <p
                style={{
                  background: "transparent",
                  width: "550px",
                  height: "145px",
                  fontWeight: "500",
                }}
              >
                Cтроительный материал, представляющий <br /> собой лист,
                состоящий из двух слоёв <br /> строительной бумаги (картона) и
                сердечника <br /> из слоя затвердевшего гипсового теста с <br />
                наполнителями.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={Prod}
              alt="Product 3"
              className="slide-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <img
              src={Wool2}
              alt="wool"
              style={{
                position: "absolute",
                top: "20px",
                right: "80px",
                background: "transparent",
                width: "284px",
                height: "305px",
              }}
            />
            <img
              src={Wool1}
              alt="wool"
              style={{
                position: "absolute",
                top: "200px",
                right: "90px",
                background: "transparent",
                width: "337px",
                height: "196px",
              }}
            />
            <div
              style={{
                position: "absolute",
                background: "transparent",
                top: "50px",
                left: "40px",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <h1
                style={{
                  background: "transparent",
                  width: "586px",
                  height: "56px",
                  fontWeight: "700",
                }}
              >
                Basalt wool тепло и тихо
              </h1>
              <p
                style={{
                  background: "transparent",
                  width: "563px",
                  height: "145px",
                  fontWeight: "500",
                }}
              >
                Базальтовое волокно представляет собой <br /> материал,
                изготовленный из чрезвычайно <br /> тонких волокон базальта,
                который состоит из <br /> минералов плагиоклаза, пироксена и
                оливина.
                <br /> Он похож на стекловолокно.
              </p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={Car}
              alt="Product 4"
              className="slide-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <img
              src={Wood}
              alt="wood"
              style={{
                position: "absolute",
                background: "transparent",
                top: "90px",
                right: "40px",
                width: "421px",
                height: "309px",
              }}
            />
            <div
              style={{
                position: "absolute",
                background: "transparent",
                top: "50px",
                left: "40px",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <h1
                style={{
                  background: "transparent",
                  width: "407px",
                  height: "58px",
                  fontWeight: "700",
                }}
              >
                Финская Фанера
              </h1>
              <p
                style={{
                  background: "transparent",
                  width: "580px",
                  height: "145px",
                  fontWeight: "500",
                }}
              >
                многослойный строительный материал,
                <br /> изготавливаемый путём склеивания <br /> специально
                подготовленного шпона. Для <br /> повышения прочности фанеры
                слои шпона <br /> накладываются так.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
       
      <Category />
      <Products />
      <Brend />
    </>
  );
}

export default Main;
