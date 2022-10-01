import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";
import { StateContextProvider, useStateContext } from "../Context/context";
const LayoutStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  main: {},
}));
const Layout = ({ children }: any) => {
  // const classes = LayoutStyles();
  const { settoggleSidebar } = useStateContext();
  return (
    <div className="layout_container">
      <Sidebar />
      <Grid
        item
        onClick={() => settoggleSidebar(false)}
        className="layout_main"
      >
        <Appbar />
        <div>{children}</div>
        <footer
          style={{
            width: "100%",
            height: "20px",
            background: "blue",
            marginTop: "auto",
          }}
          className="footer_container"
        ></footer>
      </Grid>
    </div>
  );
};

export default Layout;
