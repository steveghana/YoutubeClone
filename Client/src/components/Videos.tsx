import React from "react";
import { Grid } from "@material-ui/core";
import { Contents } from "Models";
import { FixedSizeList } from "react-window";
// import SkeletonLoader from "Loader/SkeletonLoader";
import ListSkeleton from "Loader/SkeletonList";
// import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
type S<T> = K extends T ? Contents : any;
interface Channel<Titem> {
  videos: {
    videos: S<Titem>[];
  };
  direction?: string;
}
type K = {
  video: {
    videoId: string;
  };
};

const Videos = <Titem,>({ videos, direction }: any) => {
  if (!videos?.videos?.length) return <ListSkeleton />;

  return (
    <Grid container justifyContent="space-evenly" alignItems="flex-start">
      {/* <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={videos.length}
        itemSize={50}
      > */}
        {videos?.videos.map((item:any, idx: number) => (
          <div style={{ width: "auto", padding: "1rem 0" }} key={idx}>
            { <VideoCard video={item} />}
            {/* {video.author.channelId && <ChannelCard channelDetail={video} />} */}
          </div>
        ))}
      {/* </FixedSizeList> */}
    </Grid>
  );
};

export default Videos;
