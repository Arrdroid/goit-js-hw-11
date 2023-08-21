import axios from "axios";
// import { renderUl } from "./index.js";
const URL = "https://pixabay.com/api/";
const API_KEY = "38931090-55c6b7c2dc99483da7553cf12";



export async function serviceRequest(value, page) {
  axios.defaults.params = {
    key: API_KEY,
    q: value,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page,
    per_page: 40,
  };

    return await axios.get(`${URL}`);
        
  }



