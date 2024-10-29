import React from "react";
import mainBack from "./Images/mainBack.png";
import Karousel from "./Images/carousel.png";
import Car from "./Images/carousel3.png";
import Prod from "./Images/carousel2.png";
import Category from "../components/Category";
import Products from "../components/Products";
import Brend from "../components/Brend";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
        modules={[Pagination]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src={mainBack} alt="Product 1" className="slide-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Karousel} alt="Product 2" className="slide-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Prod} alt="Product 3" className="slide-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Car} alt="Product 3" className="slide-image" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Category />
      <Products />
      <Brend />
      <Footer />
    </>
  );
}

export default Main;
