import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
type Channel = {
  channelDetail: any;
  
  marginTop?: string;
};

const ChannelCard: React.FC<Channel> = ({ channelDetail, marginTop }) => {
  console.log(channelDetail);
  
  return(
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    {/* <Link to={`/channel/${author?.channelId}`}> */}
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
           channelDetail?.avatar[0]?.url || demoProfilePicture
          }
          style={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            border: "1px solid #e3e3e3",
          }}
        />
        {/* <Typography variant="h6">{author?.title} </Typography> */}
        
      </CardContent>
    {/* </Link> */}
  </Box>
)};

export default ChannelCard;
