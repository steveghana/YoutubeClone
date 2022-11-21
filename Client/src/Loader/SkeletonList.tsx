import React from "react";
import { Skeleton } from "@material-ui/lab";
import { makeStyles, useMediaQuery, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "95%",
  },
}));

const ListSkeleton = () => {
  const classes = useStyles();
  const isTablet = useMediaQuery("(max-width:530px)");
  return (
    <div style={{height:'98vh', overflow:'hidden'}}>
      <nav  className="appbar_container">
      <Skeleton />
      <div style={{display:'flex'}} className="appbar_wrapper">
        <div className="appbar_searchContainer">
          <Skeleton
            className="appbar_searchbar"
          />
          <div style={{ padding: ".2rem 1rem", color: "white" }}>
            <Skeleton />
          </div>
        </div>
        <div className="appbar_microphone">
          <Skeleton />
        </div>
      </div>

      <div className="appbar_icons" style={{display:'flex'}}>
        <div >
          <Skeleton />
        </div>
        <div >
          <Skeleton />
        </div>
        <div >
          <Skeleton />
        </div>
      </div>
    </nav>
    <Grid    container justifyContent="space-between"   alignItems="flex-start">
       {new Array(8).fill('').map((_, i)=>(
         <Grid
       sm={12}
       md={4}
       lg={3}
          style={{
            width: isTablet ? "80vw" : "150px",
            // margin: " auto 0rem",
          }}
          >
          <Skeleton
            style={{
              width: "90%",
              height: "300px",
              borderRadius: "5px",
            }}
            />
          <div style={{ display: "flex", gap: ".5rem", padding: " 0", alignItems:'center', width:'90%'  }}>
            <Skeleton style={{width:'100px', height:'100px', borderRadius:'100%', }} />
            <div style={{width:'100%'}}>
              <Skeleton style={{width:'100%'}} />
              <Skeleton style={{width:'100%'}} />
              <Skeleton style={{width:'100%'}} />
            </div>
          </div>
        </Grid>

))}
</Grid>
</div>
  );
};

export default ListSkeleton;
