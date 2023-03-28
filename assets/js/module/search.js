import { actives, hidden, containerForm, formInput} from './activeElements.js'
import {containerProfile} from './profile.js'
import {erroNotification} from './validation.js'
import {searchInput} from './fetch-user.js'

export const titleSearch = document.querySelector(".search__title--js");
const buttonSearing = document.querySelector(".search__button--js");

export function initSearch(){
  function searing( ) {
  if(searchInput.value === ""){
    erroNotification.innerText = 'Digite um Usuario'
    hidden(containerProfile, erroNotification)
    return;
  }
  actives(true, containerForm, formInput);
  hidden(titleSearch,containerProfile)
  erroNotification.classList.add('hidden')
}
buttonSearing.addEventListener("click", searing);
}