import React from "react";
import Swiper from "swiper";
const SliderBar = () => {
  return (
    <div className="sliderBar_container">
      {Array(13).map((item, i) => (
        <div className="sliderBar_items" key={i}>
          Music{" "}
        </div>
      ))}
    </div>
  );
};

export default SliderBar;
