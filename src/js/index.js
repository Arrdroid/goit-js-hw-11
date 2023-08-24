import { serviceRequest, ONPAGE } from './api-set.js';
import { createMarkup } from './markup.js';
import _ from 'lodash';
import Notiflix from 'notiflix';

const secondSearchBtn = document.querySelector('.js-second-search');
const totalForm = document.getElementById('search-form');
export const renderUl = document.querySelector('.photo-ul');

let inputvalue = null;
let page = 1;
let expectedStamp = null;
let totalHits = null;

totalForm.addEventListener('submit', e => {
  e.preventDefault();
  renderReset();

  console.dir(e.currentTarget.elements.searchQuery.value.trim());
  inputvalue = e.currentTarget.elements.searchQuery.value.trim();

  gettingReady(inputvalue);
});

  secondSearchBtn.addEventListener('click', () => {
    page += 1;
    gettingReady(inputvalue, page);
  });

async function gettingReady(inputvalue, page = 1) {
  try {
    const response = await serviceRequest(inputvalue, page);
    console.log(response);
    expectedStamp = response.data.hits;
    console.log(expectedStamp);
    let numericResp = response.data.total;
    totalHits = response.data.totalHits;

    if (totalHits !== 0) {
      secondSearchBtn.classList.replace("load-less", "load-more");
    } 

     if (!inputvalue) {
      renderReset();
      emptyField();
      return;
    } else if (inputvalue && numericResp === 0) {
      emptyResp();
      return;
    } else if ((page * ONPAGE) >= totalHits) {
      secondSearchBtn.classList.replace("load-more", "load-less");
      endOfSearch();
      return
    } else {
      succResp();
    }

    
    fillMarkup(createMarkup(expectedStamp));
  } catch (error) {
    console.log(error);
  }
}

function fillMarkup(markup) {
  renderUl.insertAdjacentHTML('beforeend', markup);
}

function renderReset() {
  renderUl.innerHTML = '';
}

function emptyField() {
  Notiflix.Notify.failure('Warning! Do not leave search area empty!');
}

function succResp() {
  Notiflix.Notify.success('I have found some images on your request!');
}

function emptyResp() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function endOfSearch() {
  Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
}