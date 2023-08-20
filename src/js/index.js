import axios from 'axios';
import { URL, OPTIONS, serviceRequest, renderResult } from './api-set.js'; 
import _ from 'lodash';

const inputField = document.getElementById('search-input');
const searchBtn = document.querySelector('.search-btn');
const totalForm = document.getElementById("search-form");
const renderUl = document.querySelector(".photo-ul");

gettingReady();
async function gettingReady() {
  try {
    let requestToFind = null;

    inputField.addEventListener(
      'input',
      _.debounce(event => {
        requestToFind = inputField.value;
        console.log(requestToFind);
      }, 500)
    );

    OPTIONS.changeValue(requestToFind);

    totalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      serviceRequest();
    });

    
    renderUl.insertAdjacentHTML("beforeend", renderResult);

  } catch (error) {
    console.log(error);
  }
}


