import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Avatar,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import   demoThumbnailUrl from './pexels-pavel-danilyuk-8001060.jpg'
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import AvatarURL from './Rectangle 9.png';
import {Contents} from 'Models'


const VideoCard = ({
   video
}: any) => {
  const isTablet = useMediaQuery("(max-width:530px)");
  function showViews  (views:number){
    let { format } = Intl.NumberFormat("en", { notation: "compact" });
    return `${format(views)} views`;
  }
 
  return (
    <Grid
      sm={12}
      style={{
        width: isTablet ? "80vw" : "255px",
        margin: "auto",
        boxShadow: "none",
      }}
      >
      <Link to={video.video_id ? `/video/${video.video_id}` : `/video/cV2gBU6hKfY`}>
        <div
          style={{
            width: "100%",
            backgroundImage: `url(${video.thumbnails[2].url || demoThumbnailUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition:'center',
            height: "200px",
            backgroundSize: "cover",
            borderRadius:'5px'
            
          }}
        ></div>
      </Link>
      <div style={{ display: "flex", gap: ".5rem", padding: "1rem 0" }}>
        <Avatar  />
        <div>
          <Link
            style={{ textDecoration: "none" }}
            to={video.video_id ? `/video/${video.video_id}` : demoVideoUrl}
          >
            <Typography variant="subtitle2" style={{ color: "white", fontWeight:'bold' }}>
              { video.title.length > 40 ?  `${video.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}...`  : video.title || demoVideoTitle}
            </Typography>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={video.channel_id ? `/channel/${video.channel_id}` : demoChannelUrl}
          >
            <Typography variant="subtitle2" style={{ color: "gray" }}>
              {/* { channelTitle.length > 30 ? `${channelTitle.slice(0, 29) || demoChannelTitle}`: channelTitle || demoChannelTitle} */}
            </Typography>

          </Link>
          <div className="views" style={{color:'white'}}>
            {`${showViews(video.number_of_views)} . ${video.published_time || ''}`}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default VideoCard;
