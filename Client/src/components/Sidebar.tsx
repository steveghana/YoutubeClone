import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useCallback, useRef, useState } from "react";
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
const sidebarData = [
  { text: "Home", icon: <FaHome size={25} /> },
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
  // let toggleSidebar = useRef(false);
  const [toggleSidebar, settoggleSidebar] = useState(false);

  // const toggleRef = React.useRef(null);
  const expandSideBar = () => settoggleSidebar((prev) => !prev);

  // const expandSideBar = useCallback(() => {
  //   toggleSidebar.current = !toggleSidebar.current;
  //   //@ts-ignore
  //   let toggleSidebarClass = toggleRef?.current?.classList;
  //   //@ts-ignore
  //   let toggleSidebarItemClass = toggleRef?.current?.querySelectorAll(
  //     ".sidebar_container_item"
  //   );
  //   let toggleSidebarLogo = document.querySelector(
  //     ".sidebar_logo"
  //   ) as HTMLDivElement;

  //   if (toggleSidebar.current) {
  //     toggleSidebarClass.add("toggle");
  //     toggleSidebarLogo.classList.remove("sidebar_nonVisible");
  //     toggleSidebarItemClass.forEach((item: HTMLDivElement, idx: string) => {
  //       item.classList.add("itemRow");
  //     });
  //   } else {
  //     toggleSidebarClass.remove("toggle");
  //     toggleSidebarLogo.classList.add("sidebar_nonVisible");
  //     toggleSidebarItemClass.forEach((item: HTMLDivElement, idx: string) => {
  //       item.classList.remove("itemRow");
  //     });
  //   }
  // }, [toggleSidebar]);
  return (
    <Grid
      /* ref={toggleRef} */ style={{
        minWidth: toggleSidebar ? "19vw" : "initial",
        position: toggleSidebar ? "absolute" : "initial",
        left: toggleSidebar ? "0" : "unset",
      }}
      className="sidebar_container"
    >
      <div onClick={expandSideBar} className="sidebar_hameburger-Toggle">
        <Menu />
        <div
          style={{ display: toggleSidebar ? "block" : "none" }}
          className="sidebar_logo"
        >
          <Logo />
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
