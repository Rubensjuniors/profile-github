import {containerProfile} from './profile.js'
import { actives, hidden, containerForm, formInput} from './activeElements.js'

export const erroNotification = document.querySelector('.erro');

export const validation = (inputElement)=>{

  if(inputElement.value === ''){
    hidden(containerProfile, erroNotification)
    erroNotification.innerText = 'Digite um Usuario'
    actives(false, containerForm, formInput)
  }

}