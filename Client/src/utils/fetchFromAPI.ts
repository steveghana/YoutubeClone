import axios from "axios";

export const BASE_URL = "https://youtube-v2.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     "X-RapidAPI-Key": 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

export const fetchFromAPI = async <T>(url: string, rest:any ) => {
  const options = {
    params: {video_id: 'PuQFESk0BrA'},
    headers: {
      'X-RapidAPI-Key': 'b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e',
      'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
  };
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data)

  return data;
};
