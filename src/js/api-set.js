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
    const {data} = await axios.get(`${URL}`, {
      params: OPTIONS
    });
    console.log(data);
    return data;
    
      } catch (error) {
    console.log(error);
  }
}

export function markupRenderer(data) {
  console.log(data);
  const {hits} = data;
    
    hits.map(
      (e) =>
        `
        <div class="photo-element">
          <img src="${e.webformatURL}" alt="${e.tags}" 
            class="regular-img" loading="lazy" />
          <ul class="photo-info">

            <li class = "photo-desc">
            <b>Likes</b>
            <p>${e.likes}</p>
            </li>
            
            <li class = "photo-desc">
            <b>Views:</b>
            <p>${e.views}</p>
            </li>

            <li class = "photo-desc">
            <b>Comments: </b>
            <p>${e.comments}</p>
            </li>

            <li class = "photo-desc">
            <b>Downloads: </b>
            <p>${e.downloads}</p>
            </li>

        </ul>
      </div>
      `
  ).join("");
  
}
