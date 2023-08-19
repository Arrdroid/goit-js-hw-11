import axios from "axios";

const URL = "https://pixabay.com/api/";

const OPTIONS = {
  key: "38931090-55c6b7c2dc99483da7553cf12",
  // q: value,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  // page: page,
  per_page: 40,
};

async function serviceRequest() {
  try {
    const response = await axios.get(`${URL}${OPTIONS}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default { URL, OPTIONS, serviceRequest };