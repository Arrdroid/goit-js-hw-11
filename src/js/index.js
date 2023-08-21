import { serviceRequest } from './api-set.js'; 
import { createMarkup } from './markup.js';
import _ from 'lodash';
import Notiflix from 'notiflix';


// const inputField = document.getElementById('search-input');
// const searchBtn = document.querySelector('.search-btn');
const totalForm = document.getElementById("search-form");
export const renderUl = document.querySelector(".photo-ul");

let inputvalue = null;

totalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderReset();

  console.dir(e.currentTarget.elements.searchQuery.value.trim());
  inputvalue = e.currentTarget.elements.searchQuery.value.trim();
  if (!inputvalue) {
    renderReset();
    emptyResp();
    return
  } else {
    succResp();
  }

  gettingReady(inputvalue);
});


async function gettingReady(inputvalue, page = 1) {
  try {
  const response = await serviceRequest(inputvalue, page);
    console.log(response);
    let expectedStamp = response.data.hits;
    console.log(expectedStamp);

    
    fillMarkup(createMarkup(expectedStamp));
    
    
  } catch (error) {
    console.log(error);
  }
}


function fillMarkup(markup) {
  renderUl.insertAdjacentHTML("beforeend", markup);
}

function renderReset() {
  renderUl.innerHTML = "";
}

function emptyResp() {
  Notiflix.Notify.failure('Warning! Do not leave search area empty!');
}

function succResp() {
  Notiflix.Notify.success('I have found some images on your request!');
}

