import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Subscriptions,
  LibraryMusic,
  MusicVideo,
  HistoryRounded,
} from "@material-ui/icons";
import { FaHome, FaCompass } from "react-icons/fa";
import Logo from "./Logo";
import { StateContextProvider, useStateContext } from "../Context/context";
const sidebarData = [
  { text: "Home", icon: <FaHome size={25} />, path: "/" },
  { text: "Explore", icon: <FaCompass size={25} />, path: "/explore" },
  {
    text: "Shorts",
    icon: <MusicVideo style={{ width: "26px", height: "26px" }} />,
    path: "/shorts",
  },
  {
    text: "Subscriptions",
    icon: <Subscriptions style={{ width: "26px", height: "26px" }} />,
    path: "/subscriptions",
  },
  {
    text: "Library",
    icon: <LibraryMusic style={{ width: "26px", height: "26px" }} />,
    path: "/",
  },
  {
    text: "History",
    icon: <HistoryRounded style={{ width: "26px", height: "26px" }} />,
    path: "/history",
  },
];

const Sidebar = () => {
 
  const { toggleSidebar, settoggleSidebar, expandSideBar, setSelectedCategory, showSidebar } = useStateContext();
  useEffect(() => {
    window.addEventListener("click", () => {
      if (toggleSidebar) {
        settoggleSidebar(false);
      }
    });
    return () => {
      settoggleSidebar(false);
    };
  }, []);
  return (
    <Grid
      /* ref={toggleRef} */ style={{
        minWidth: toggleSidebar ? "auto" : "initial",
        position: toggleSidebar ? "absolute" : "initial",
        left: toggleSidebar ? "0" : "unset",
        zIndex: 5,
        display: !showSidebar ? 'none' : 'flex'
      }}
      className="sidebar_container"
    >
      <div onClick={expandSideBar} className="sidebar_hameburger-Toggle">
        <Menu style={{ color: "white" }} />
        <div
          style={{ display: toggleSidebar ? "block" : "none" }}
          className="sidebar_logo"
        >
          <Logo toggleSidebar={toggleSidebar} />
        </div>
      </div>
      {sidebarData.map(({ icon, text, path }, itemidx) => (
        <Link
          style={{ textDecoration: "none", color: "unset" }}
          key={itemidx}
          to={`${path}`}
        >
          <div
            className={
              toggleSidebar
                ? "sidebar_container_item hover"
                : "sidebar_container_item"
            }
            style={{
              flexDirection: toggleSidebar ? "row" : "column",
              justifyContent: toggleSidebar ? "flex-start" : "initial",
              alignItems: toggleSidebar ? "center" : "center",
              gap: toggleSidebar ? "1.5rem" : "initial",
              height: toggleSidebar ? "39px" : "initial",
              padding: toggleSidebar ? "0 0.7rem 0 1.5rem" : "initial",
            }}
            //@ts-ignore
          >
            <div>{icon}</div>
            <Typography variant="caption">{text}</Typography>
          </div>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
