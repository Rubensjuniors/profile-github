import { titleSearch} from './search.js'
import { actives, hidden, containerForm, formInput} from './activeElements.js'
import {searchInput} from './fetch-user.js'

export const containerProfile = document.querySelector("#profile");
const closeProfile = document.querySelector(".close__profile--js");

export function initCloseProfile(){
  function close() {
    searchInput.value = '';
    actives(false, containerForm, formInput);
    hidden(containerProfile,titleSearch)
  }
  
  closeProfile.addEventListener("click", close);
}