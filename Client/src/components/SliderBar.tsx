import { Typography } from "@material-ui/core";
import React from "react";
import Swiper from "swiper";
const SliderBar = () => {
  console.log(Array(13).map((item) => item));
  return (
    <div className="sliderBar_container">
      {Array(12).map((item, i) => (
        <Typography variant="caption" className="sliderBar_items" key={i}>
          {item}
        </Typography>
      ))}
    </div>
  );
};

export default SliderBar;
