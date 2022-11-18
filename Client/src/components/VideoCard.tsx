import React from "react";
import { Link } from "react-router-dom";
import { Typography,  CardMedia, Avatar, useMediaQuery, Grid } from "@material-ui/core";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: any) => {
  const isTablet = useMediaQuery("(max-width:530px)");
  return(
    <Grid sm={12} style={{ width:isTablet ?"80vw" :"240px",margin:'auto',  boxShadow: "none",  }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <div style={{ width:"100%",backgroundImage:   `url(${snippet?.thumbnails?.high?.url || demoThumbnailUrl})`, backgroundRepeat:"no-repeat", height:'200px', backgroundSize:'cover'}}>

      </div>
     
    </Link>
    <div style={{display:'flex',  gap:'.5rem', padding:'1rem 0'}} >
      <Avatar/>
      <div>

      <Link style={{textDecoration:'none'}} to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" style={{ color:"black" }}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
      style={{textDecoration:'none'}}
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" style={{color:'gray'}}>
          {snippet?.channelTitle || demoChannelTitle}
        </Typography>
      </Link>
      </div>
  </div>
    </Grid>
)
};

export default VideoCard;
