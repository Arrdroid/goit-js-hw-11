import axios from "axios";
import { URL, OPTIONS, serviceRequest } from "./api-set.js";

const inputField = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");

try {
  let requestToFind = null;

  inputField.addEventListener("input", _.debounce((event) => {
    const requestToFind = event.currentTarget.value.trim();
  }, 300)
  );
  console.log(requestToFind);
  console.dir(inputField);

} catch (error) {
  
}




