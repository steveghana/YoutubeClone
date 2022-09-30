import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";
const LayoutStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  main: {},
}));
const Layout = ({ children }: any) => {
  const classes = LayoutStyles();
  return (
    <div className={classes.container}>
      <Sidebar />
      <Grid item className={classes.main}>
        <Appbar />
        <div>{children}</div>
      </Grid>
    </div>
  );
};

export default Layout;
