import React, { useRef } from "react";
import { Typography } from "@material-ui/core";
import { useStateContext } from "Context/context";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { categories } from "utils/constants";
import "swiper/css";
import "swiper/css/free-mode";

const SliderBar = () => {
  const sliderBar = useRef(null) as React.LegacyRef<HTMLElement> | any;
  const { setSelectedCategory } = useStateContext();
  return (
    <div ref={sliderBar} className="sliderBar_container">
      <Swiper
        slidesPerView={11}
        spaceBetween={10}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
      >
        {categories.map(({ name }, i) => (
          <SwiperSlide
            onClick={() => setSelectedCategory(name)}
            key={i}
            className="sliderBar_items"
          >
            <Typography variant="caption" key={i}>
              {name}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBar;
