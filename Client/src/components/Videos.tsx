import React from "react";
import { Grid, Box } from "@material-ui/core";

import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
const Videos = ({ videos, direction }: any) => {
  if (!videos?.length) return <div>Loading...</div>;

  return (
    <Grid
      style={{
        flexDirection: direction ? "row" : "column",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "start",
        gap: "2rem",
      }}
    >
      {videos.map((item: any, idx: number) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Grid>
  );
};

export default Videos;
