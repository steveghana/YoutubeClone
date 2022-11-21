import React, { useEffect } from "react";
import SliderBar from "../components/SliderBar";
import axios from "axios";
import Video from "components/Videos";
import data from "../Youtube/videodetails.json";
import { useStateContext } from "Context/context";

const Home = () => {
  useEffect(() => {
    //channel videos
    /* 
    const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {q: 'desp', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/search/',
  params: {q: 'despacito', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
}


const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/channel/details/',
  params: {id: 'UCJ5v_MCY6GNUBTO8-D3XoAg', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
}


const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/channel/videos/',
  params: {id: 'UCJ5v_MCY6GNUBTO8-D3XoAg', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/video/details/',
  params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};



const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/video/comments/',
  params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};




const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
  params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};




    
    
    
    */
  }, []);

  let negateStyles = 70 + 25 + 50;
  return (
    <div className="home_container">
      <SliderBar />
      <div
        style={{
          overflowY: "scroll",
          padding: "1rem",
        }}
        className="home_main"
      >
       
      </div>
    </div>
  );
};

export default Home;
