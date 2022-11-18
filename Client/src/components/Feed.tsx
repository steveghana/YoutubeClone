import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import * as S from '../Youtube/home.json'
import { fetchFromAPI } from "../utils/fetchFromAPI";
import axios from 'axios'
import SliderBar from "./SliderBar";
import Videos from "./Videos";
import { useStateContext } from "Context/context";
import { VideocamSharp } from "@material-ui/icons";
const Feed = () => {
 
  const [videos, setVideos] = useState(null) as any;
const {selectedCategory} = useStateContext()
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://youtube138.p.rapidapi.com/channel/videos/',
      params: {id: 'UCJ5v_MCY6GNUBTO8-D3XoAg', hl: 'en', gl: 'US'},
      headers: {
        'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      localStorage.setItem("autocompleted", JSON.stringify(response.data))
    }).catch(function (error) {
      console.error(error);
    });
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
