import { cartArray, favBooks } from "../assets/arrays.js";


export const homeDisplay = () => {

 
    const displayDiv = document.querySelector('#display-div')

    const homeContainer = document.createElement('div')
    homeContainer.setAttribute('id', 'home')
    displayDiv.appendChild(homeContainer)
  
    const placeholder = document.createElement('div')
    placeholder.setAttribute('id', 'placeholder')
    
  
    const slogan = document.createElement('div')
    slogan.setAttribute('id', 'slogan')
    placeholder.appendChild(slogan)
    slogan.textContent = 'Animate a descubrir a los mejores escritores y obras del mundo'
    
    
    const description = document.createElement('div')
    description.setAttribute('id','description')
    placeholder.appendChild(description)
    description.textContent = 'AUREA es el lugar para encontrar y descubrir todo lo que necesitás, acá.'
  
    const banner = document.createElement('div')
    banner.setAttribute('id', 'banner')
    placeholder.appendChild(banner)
  
    const footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    footer.innerHTML = 'trabajo práctico para Codo a Codo - 2024. Contáctenos <a href="mailto:address@gmail.com"><span class="material-symbols-outlined" id="email-icon">alternate_email</span></a>'

    displayDiv.appendChild(homeContainer)
    homeContainer.appendChild(placeholder)
    homeContainer.appendChild(footer)
  
    
  } //this is the main screen when the app loads