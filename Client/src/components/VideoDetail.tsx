import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Grid } from "@material-ui/core";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
interface Detail {}
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState("") as any;
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // if(!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Grid direction="column">
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="textPrimary" variant="h5">
              {title}
            </Typography>
            <Grid
              direction="row"
              justifyContent="space-between"
              style={{ color: "#fff", padding: "1rem 2rem" }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={"h6"} color="textPrimary">
                  {channelTitle}
                </Typography>
              </Link>
              <Grid direction="row" alignItems="center">
                <Typography variant="body1" style={{ opacity: "0.7" }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" style={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Grid>
    </Box>
  );
};

export default VideoDetail;
