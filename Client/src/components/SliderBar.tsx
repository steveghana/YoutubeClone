import React from "react";
import { Typography } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
const SliderBar = () => {
  return (
    <div className="sliderBar_container">
      <Swiper
        slidesPerView={11}
        spaceBetween={10}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
      >
        {new Array(17).fill("Music").map((item, i) => (
          <SwiperSlide className="sliderBar_items">
            <Typography variant="caption" key={i}>
              {item}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBar;
