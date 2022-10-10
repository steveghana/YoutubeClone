import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import SliderBar from "./SliderBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Grid item>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SliderBar />

        <Typography
          className="copyright"
          variant="body2"
          style={{ marginTop: "1.5", color: "#fff" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} style={{ overflowY: "auto", height: "90vh", flex: "1" }}>
        <Typography variant="h4" style={{ color: "white", fontWeight: "bold" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Grid>
  );
};

export default Feed;
