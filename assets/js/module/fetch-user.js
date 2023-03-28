export const searchInput = document.querySelector(".search__input--js");

const nickname = document.querySelector('.nickname--js');
const photoProfile = document.querySelector('.info__img--js');
const nameProfile = document.querySelector('.info__name--js');
const reposNumb = document.querySelector('.repositorios__numb-js');
const followersNumb = document.querySelector('.followers__numb-js');
const followingNumb = document.querySelector('.following__numb-js');
const textBio = document.querySelector('.bio__text--js');
const profileButton = document.querySelector('.acesse__profile--js');

const setInfo = async (user)=>{
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()

    nickname.innerText = data.login;
    photoProfile.src = data.avatar_url
    nameProfile.innerText = data.name;
    reposNumb.innerText = data.public_repos;
    followersNumb.innerText = data.followers;
    followingNumb.innerText = data.following;
    textBio.innerText = data.bio;
    profileButton.href = data.html_url
}

function typingUser(event){
  const typing = event.currentTarget.value
  setInfo(typing)

}

searchInput.addEventListener('change', typingUser)