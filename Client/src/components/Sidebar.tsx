import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  Menu,
  Subscriptions,
  LibraryMusic,
  MusicVideo,
  HistoryRounded,
} from "@material-ui/icons";
import { FaHome, FaCompass } from "react-icons/fa";
const sidebarData = [
  { text: "Home", icon: <FaHome size={20} /> },
  { text: "Explore", icon: <FaCompass size={20} /> },
  { text: "Shorts", icon: <MusicVideo /> },
  { text: "Subscriptions", icon: <Subscriptions /> },
  { text: "Library", icon: <LibraryMusic /> },
  { text: "History", icon: <HistoryRounded /> },
];

const Sidebar = () => {
  // const [toggleSidebar, setTogglesidebar] = React.useState(false);
  let toggleSidebar = false;
  const toggleRef = React.useRef(null);
  const sidebarItemRef = React.useRef(null);
  const expandSideBar = () => {
    toggleSidebar = !toggleSidebar;
    //@ts-ignore
    let toggleSidebarClass = toggleRef?.current?.classList;
    //@ts-ignore
    let toggleSidebarItemClass = sidebarItemRef?.current?.querySelector(
      ".sidebar_container_item"
    );
    if (toggleSidebar) {
      toggleSidebarClass.add("toggle");
      toggleSidebarItemClass.add("itemRow");
    } else {
      toggleSidebarClass.remove("toggle");
      toggleSidebarItemClass.remove("itemRow");
    }
  };
  return (
    <Grid ref={toggleRef} className="sidebar_container">
      <div onClick={expandSideBar} className="sidebar_hameburger-Toggle">
        <Menu />
      </div>
      {sidebarData.map(({ icon, text }, itemidx) => (
        <div
          className="sidebar_container_item"
          //@ts-ignore
          key={itemidx}
        >
          <div>{icon}</div>
          <Typography variant="caption">{text}</Typography>
        </div>
      ))}
    </Grid>
  );
};

export default Sidebar;
