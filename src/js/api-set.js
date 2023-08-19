import axios from "axios";

export const URL = "https://pixabay.com/api/";

export const OPTIONS = {
  key: "38931090-55c6b7c2dc99483da7553cf12",
  q: null,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  // page: page,
  per_page: 40,
  changeValue(requestToFind) {
    this.q = requestToFind;
  }
};

export async function serviceRequest() {
  try {
    const response = await axios.get(`${URL}`, {
      params: OPTIONS
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

