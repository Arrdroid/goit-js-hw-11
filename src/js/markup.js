export function createMarkup(array) {
          return array.map( 
            (e) => {return `
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
            }).join("");

}