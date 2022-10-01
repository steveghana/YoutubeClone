import { Typography } from "@material-ui/core";
import React from "react";
import Swiper from "swiper";
const SliderBar = () => {
  return (
    <div className="sliderBar_container">
      {["All", "Music", "News", "Sports"].map((item, i) => (
        <Typography variant="caption" className="sliderBar_items" key={i}>
          {item}
        </Typography>
      ))}
    </div>
  );
};

export default SliderBar;
