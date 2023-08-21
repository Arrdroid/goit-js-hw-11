import axios from "axios";
import { renderUl } from "./index.js";
export const URL = "https://pixabay.com/api/";

export const OPTIONS = {
  key: "38931090-55c6b7c2dc99483da7553cf12",
  q: "",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  page: 1,
  per_page: 40,
  changeValue(requestToFind) {
    this.q = requestToFind;
  }
};

let renderResult = "";

export async function serviceRequest() {
  try {
    const {data} = await axios.get(`${URL},${OPTIONS}`);
    console.log(data);
    
    renderResult = data.hits
              .map(
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
                
    return fillMarkup();
      } catch (error) {
    console.log(error);
  }
}

function fillMarkup() {
  renderUl.insertAdjacentHTML("beforeend", renderResult);
}
