export function createMarkup(array) {
          return array.map( 
            (e) => {
              return `
                <li class="thumb-item list">
                <a class="thumb-link link">
                <div class="thumb-div">
                  <img src="${e.webformatURL}" alt="${e.tags}" 
                    class="regular-img" 
                    loading="lazy" />
                  <ul class="thumb-box link">

                    <li class = "photo-desc list">
                    <h2 class="mainsection-title">Likes</h2>
                    <p class="mainsection-item">${e.likes}</p>
                    </li>
                    
                    <li class = "photo-desc list">
                    <h2 class="mainsection-title">Views:</h2>
                    <p class="mainsection-item">${e.views}</p>
                    </li>

                    <li class = "photo-desc list">
                    <h2 class="mainsection-title">Comments: </h2>
                    <p class="mainsection-item">${e.comments}</p>
                    </li>

                    <li class = "photo-desc list">
                    <h2 class="mainsection-title">Downloads: </h2>
                    <p class="mainsection-item">${e.downloads}</p>
                    </li>

                </ul>
              </div>
              </a>
              </li>
              `
            }).join("");

}