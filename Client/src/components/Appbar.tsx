import React from "react";
import { FaYoutube, FaSearch } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
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
  const classes = appbarStyles();
  return (
    <nav className={classes.appbar}>
      <div className={classes.logo}>
        <FaYoutube />
        YOUTUBE
      </div>
      <div className={classes.search}>
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>
      <div className={classes.camera}></div>
      <div className={classes.notification}></div>
      <div className={classes.profile}></div>
    </nav>
  );
};

export default Appbar;
