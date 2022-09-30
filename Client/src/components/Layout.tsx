import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";
const Layout = ({ children }: any) => {
  const LayoutStyles = makeStyles((theme) => ({
    container: {},
    main: {},
  }));
  const classes = LayoutStyles();
  return (
    <Container className={classes.container}>
      <Sidebar />
      <Grid item className={classes.main}>
        <Appbar />
        <div>{children}</div>
      </Grid>
    </Container>
  );
};

export default Layout;
