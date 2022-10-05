import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Typography } from "@material-ui/core";
interface LogoProps {
  toggleSidebar?: boolean;
}
const Logo: React.FC<LogoProps> = ({ toggleSidebar }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      className="appbar_logo"
    >
      <FaYoutube color="red" size={30} />
      <Typography
        style={{
          font: "1.4rem Oswald",
          color: toggleSidebar ? "white" : "unset",
        }}
      >
        YOUTUBE
      </Typography>
    </div>
  );
};

export default Logo;
