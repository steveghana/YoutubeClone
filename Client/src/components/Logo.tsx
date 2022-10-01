import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Typography } from "@material-ui/core";
const Logo = () => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      className="appbar_logo"
    >
      <FaYoutube color="red" size={30} />
      <Typography>YOUTUBE</Typography>
    </div>
  );
};

export default Logo;
