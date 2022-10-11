import React from "react";
import {
  FaYoutube,
  FaSearch,
  FaCamera,
  FaBell,
  FaUser,
  FaMicrophone,
} from "react-icons/fa";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles, Typography } from "@material-ui/core";
import Logo from "./Logo";

const appbarStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    width: "100%",
  },
  logo: {},
  search: {
    padding: "10px",
    display: "flex",
    flex: "1 0 100%",
  },
  camera: {},
  notification: {},
  profile: {},
}));
const Appbar = () => {
  const appbar = React.useRef(null) as React.LegacyRef<HTMLElement> | any;
  const classes = appbarStyles();
  return (
    <nav ref={appbar} className="appbar_container">
      <Logo />
      <div className="appbar_wrapper">
        <div className="appbar_searchContainer">
          <input
            type="text"
            className="appbar_searchbar"
            placeholder="Search"
          />
          <div style={{ padding: ".2rem 1rem", color: "white" }}>
            <SearchOutlined />
          </div>
        </div>
        <div className="appbar_microphone">
          <FaMicrophone />
        </div>
      </div>

      <div className="appbar_icons">
        <div className={classes.camera}>
          <FaCamera />
        </div>
        <div className={classes.notification}>
          <FaBell />
        </div>
        <div className={classes.profile}>
          <FaUser />
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
