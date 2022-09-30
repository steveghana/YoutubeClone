import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FaHome, FaCompass, FaHamburger } from "react-icons/fa";
const sidebarData = [
  { text: "Home", icon: <FaHome size={20} /> },
  { text: "Explore", icon: <FaCompass size={20} /> },
];

const Sidebar = () => {
  return (
    <Grid className="sidebar_container">
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
