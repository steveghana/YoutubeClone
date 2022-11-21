import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Grid } from "@material-ui/core";
import Videos from "./Videos";
import ListSkeleton from "Loader/SkeletonList";
// import * as S from '../Youtube/home.json'
import { useStateContext } from "Context/context";
// import  * as VidDetail from '../Youtube/videodetails.json'
// import { Contents } from "Models";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null) as any;
  const [videos, setVideos] = useState({ contents: [] });
  const { setShowsideBar } = useStateContext();

  const { id } = useParams();

  useEffect(() => {
    setShowsideBar(true);
    fetchFromAPI("video/details", { video_id:id }).then((data) => console.log(data));
    // setVideoDetail(VidDetail)
    // fetchFromAPI('videos/', id).then(
    //   (data) => setVideos(data.items)
    // console.log(videoDetail);
    // );
  }, [id]);

  return (
    <Box style={{ overflowY: "scroll", height: "95vh" }}>
      <Grid style={{ display: "flex" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              // if(!videoDetail?.snippet) return <Loader />;
            />
            {videoDetail.video_id ? (
              <>
                <Typography color="textPrimary" variant="h5">
                  {videoDetail?.title}
                </Typography>
                <Grid
                  direction="row"
                  justifyContent="space-between"
                  style={{ color: "#fff", padding: "1rem 2rem" }}
                >
                  <Link to={`/channel/${videoDetail?.author?.channelId}`}>
                    <Typography variant={"h6"} color="textPrimary">
                      {videoDetail?.author.title}
                    </Typography>
                  </Link>
                  <Grid direction="row" alignItems="center">
                    <Typography variant="body1" style={{ opacity: "0.7" }}>
                      {parseInt(videoDetail?.stats?.views).toLocaleString()}{" "}
                      views
                    </Typography>
                    <Typography variant="body1" style={{ opacity: "0.7" }}>
                      {parseInt(videoDetail?.stats?.likes).toLocaleString()}{" "}
                      likes
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ) : (
              <ListSkeleton />
            )}
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* <Videos videos={videos} direction="column" /> */}
        </Box>
      </Grid>
    </Box>
  );
};

export default VideoDetail;
