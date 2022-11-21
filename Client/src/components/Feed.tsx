import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import * as S from '../Youtube/home.json'
import { fetchFromAPI } from "../utils/fetchFromAPI";
// import axios from 'axios'
import SliderBar from "./SliderBar";
import Videos from "./Videos";
import { useStateContext } from "Context/context";
// import { Contents } from "Models";
// import { VideocamSharp } from "@material-ui/icons";

const Feed = () => {
 
  const [videos, setVideos] = useState({videos:[]}) ;
const {selectedCategory, setShowsideBar} = useStateContext()
  useEffect(() => {
    setShowsideBar(true)
   fetchFromAPI('trending/', {lang: 'en', country: 'us', section: 'Now'}).then((data)=>{
      setVideos(data)
      console.log(data)
     }) 
  }, [selectedCategory])

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
      </Box>
      <div style={{ height:'80vh', overflowY:'scroll', marginBottom:'4rem', }}>
        <Videos videos={videos} />

      </div>

    </Grid>
  );
};

export default Feed;
