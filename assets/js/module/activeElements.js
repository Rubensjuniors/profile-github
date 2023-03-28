export const containerForm = document.querySelector(".search__form-js");
export const formInput = document.querySelector(".form--js");


export const actives = (boolean, ...elements) => {
  elements.forEach((element) => {
    if (boolean) {
      return element.classList.add("ativo");
    } else {
      return element.classList.remove("ativo");
    }
  })
};

export const hidden = (elementHidden, elementVisible)=>{
  elementHidden.classList.add("hidden");
  elementVisible.classList.remove("hidden");
};
