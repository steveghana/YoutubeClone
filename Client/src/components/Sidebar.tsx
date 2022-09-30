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
  return (
    <Grid className="sidebar_container">
      <div className="sidebar_hameburger-Toggle">
        <Menu />
      </div>
      {sidebarData.map(({ icon, text }, itemidx) => (
        <div key={itemidx}>
          <div>{icon}</div>
          <Typography variant="caption">{text}</Typography>
        </div>
      ))}
    </Grid>
  );
};

export default Sidebar;
