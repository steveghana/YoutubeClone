import React, { useEffect } from "react";
import SliderBar from "../components/SliderBar";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    //channel videos
    // const options = {
    //   method: "GET",
    //   url: "https://youtube-v31.p.rapidapi.com/search",
    //   params: {
    //     channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
    //     part: "snippet,id",
    //     order: "date",
    //     maxResults: "50",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     // localStorage.setItem("home", JSON.stringify(response.data));
    //     // console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //search
    // const option = {
    //   method: "GET",
    //   url: "https://youtube-v31.p.rapidapi.com/search",
    //   params: {
    //     q: "music",
    //     part: "snippet,id",
    //     regionCode: "US",
    //     maxResults: "50",
    //     order: "date",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(option)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //suggested
    // const options = {
    //   method: "GET",
    //   url: "https://youtube-v31.p.rapidapi.com/search",
    //   params: {
    //     relatedToVideoId: "7ghhRHRP6t4",
    //     part: "id,snippet",
    //     type: "video",
    //     maxResults: "50",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //     localStorage.setItem("suggested", JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //Comments
    // const options = {
    //   method: "GET",
    //   url: "https://youtube-v31.p.rapidapi.com/commentThreads",
    //   params: { part: "snippet", videoId: "7ghhRHRP6t4", maxResults: "100" },
    //   headers: {
    //     "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     localStorage.setItem("comments", JSON.stringify(response.data));
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //Channel Details
    // const options = {
    //   method: "GET",
    //   url: "https://youtube-v31.p.rapidapi.com/channels",
    //   params: { part: "snippet,statistics", id: "UCBVjMGOIkavEAhyqpxJ73Dw" },
    //   headers: {
    //     "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //     localStorage.setItem("channel details", JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //PLaylist videos
    // const options = {
    //   method: "GET",
    //   url: "https://youtube-v31.p.rapidapi.com/playlistItems",
    //   params: {
    //     playlistId: "RDZiQo7nAkQHU",
    //     part: "snippet",
    //     maxResults: "50",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //     localStorage.setItem("playlist videos", JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //Playlist details
    // const options = {
    //   method: "GET",
    //   url: "https://youtube-v31.p.rapidapi.com/playlists",
    //   params: { id: "RDZiQo7nAkQHU", part: "snippet" },
    //   headers: {
    //     "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //     localStorage.setItem("playlist details", JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //Video details
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/videos",
      params: { part: "contentDetails,snippet,statistics", id: "7ghhRHRP6t4" },
      headers: {
        "X-RapidAPI-Key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("video details", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <SliderBar />
    </div>
  );
};

export default Home;
