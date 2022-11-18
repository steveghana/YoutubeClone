import React from "react";
import { Grid } from "@material-ui/core";
// import SkeletonLoader from "Loader/SkeletonLoader";
import ListSkeleton from "Loader/SkeletonList";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
type Channel = {
  videos: any;
  // item: s;
  marginTop?: string;
  direction?: string;
};
type item = {
  item: s;
};
type s = {
  id: {
    channelId: string;
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: { url: string };
    };
  };
  statistics: {
    subscriberCount: string;
  };
};
const Videos: React.FC<Channel> = ({ videos, direction }) => {
  if (!videos?.kind?.length) return <ListSkeleton />;

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      {videos.items.map((item: any, idx: number) => (
        <div style={{ width: "auto", padding:"1rem 0" }} key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </Grid>
  );
};

export default Videos;
