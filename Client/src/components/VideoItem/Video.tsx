import React from "react";
import { Avatar, Typography } from "@material-ui/core";
const Video = () => {
  return (
    <div className="video_container">
      <div className="video_thumbnail">.</div>
      <div className="video_description_wrapper">
        <Avatar />
        <div className="video_description-text">
          <Typography variant="subtitle1">
            The day Ronaldinho showed Zidane who is t....
          </Typography>
          <Typography className="video_channel_name">RHDComps</Typography>
          <div className="video_views">
            <Typography variant="caption">143k views</Typography>
            <Typography variant="caption">. 4weeks ago</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
