import axios from "axios";
import { URL, OPTIONS, serviceRequest } from "./api-set.js"; // Import directly
import _ from 'lodash';

const inputField = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");

async function gettingReady() {
  try {
    let requestToFind = null;

    inputField.addEventListener("input", _.debounce((event) => {
      requestToFind = inputField.value;
      console.log(requestToFind);
    }, 400));

    OPTIONS.changeValue(requestToFind);
    await serviceRequest();
  
  } catch (error) {
    console.log(error);
  }
}

gettingReady();
