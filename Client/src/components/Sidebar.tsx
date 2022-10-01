import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useCallback, useRef } from "react";
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
import SidebarLIstItem from "./SidebarLIstItem";
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
  let toggleSidebar = useRef(false);
  const toggleRef = React.useRef(null);
  const expandSideBar = useCallback(() => {
    toggleSidebar.current = !toggleSidebar.current;
    //@ts-ignore
    let toggleSidebarClass = toggleRef?.current?.classList;
    //@ts-ignore
    let toggleSidebarItemClass = toggleRef?.current?.querySelectorAll(
      ".sidebar_container_item"
    );
    let toggleSidebarLogo = document.querySelector(
      ".sidebar_logo"
    ) as HTMLDivElement;

    if (toggleSidebar.current) {
      toggleSidebarClass.add("toggle");
      toggleSidebarLogo.classList.remove("sidebar_nonVisible");
      toggleSidebarItemClass.forEach((item: HTMLDivElement, idx: string) => {
        item.classList.add("itemRow");
      });
    } else {
      toggleSidebarClass.remove("toggle");
      toggleSidebarLogo.classList.add("sidebar_nonVisible");
      toggleSidebarItemClass.forEach((item: HTMLDivElement, idx: string) => {
        item.classList.remove("itemRow");
      });
    }
  }, [toggleSidebar]);

  return (
    <Grid ref={toggleRef} className="sidebar_container">
      <div onClick={expandSideBar} className="sidebar_hameburger-Toggle">
        <Menu />
        <div className="sidebar_logo sidebar_nonVisible">
          <Logo />
        </div>
      </div>
      {sidebarData.map(({ icon, text, path }, itemidx) => (
        <SidebarLIstItem icon={icon} text={text} itemidx={itemidx} to={path} />
      ))}
    </Grid>
  );
};

export default Sidebar;
