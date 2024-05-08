import { homeDisplay } from "../components/homeDisplay.js";


export const createInput = (type, name, placeholder, required) => {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    if(required) {
        input.setAttribute('required', 'true');
    }
    return input;
}

export const appendMultipleChildrens = (parent, childrens) =>{
    childrens.forEach((children)=>{
        parent.appendChild(children); 
    });
}

export const initLoadingAnimation  = () =>{
    const body = document.querySelector("body");
    const loadingAnimationContainer = document.createElement('div')
    loadingAnimationContainer.classList.add('spinner-container');

    const spinner = document.createElement('img');
    spinner.classList.add('spinner')
    spinner.setAttribute('src', './front/assets/animations/cube.gif')

    
    body.prepend(loadingAnimationContainer);
    loadingAnimationContainer.appendChild(spinner);
}

export const closeLoadingAnimation = () =>{
    const loadingAnimationContainer = document.querySelector('.spinner-container');
    if(loadingAnimationContainer){
    loadingAnimationContainer.remove();
    }
} 

export const createModal = (text, toRemove) => {
    toRemove.remove()

    const body = document.querySelector("body");
    const displayDiv = document.querySelector('#display-div')

    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container');

    const modal = document.createElement('div')
    modal.classList.add('modal');
    modal.textContent = text;

    const modalButton = document.createElement('button')
    modalButton.classList.add('modal-button')

    modalButton.textContent= "OK";
    modalButton.onclick = function(){
        modalContainer.remove()
        displayDiv.innerHTML = ''
        homeDisplay()
    }
    body.prepend(modalContainer);
    modalContainer.appendChild(modal);
    modal.appendChild(modalButton);
    
}



    