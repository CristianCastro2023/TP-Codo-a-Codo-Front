import {homeDisplay} from './homeDisplay.js'
import { createAccountDisplay } from './createAccount.js';
import { setLoggedIn } from '../assets/userAuth.js';
import { userInfo } from '../assets/lookUp.js';
import { createInput, appendMultipleChildrens } from '../assets/helperFunctions.js';

const users = userInfo

export const logInDisplay = () => {

    const body = document.querySelector('body');
    const loginModal = document.createElement("div");
    loginModal.setAttribute("id", "login-modal-bg");
    
    body.appendChild(loginModal);
    
    const loginForm = document.createElement("form");
    loginForm.setAttribute("method", "post");
    loginForm.setAttribute("id", "login-form");
    
    loginModal.appendChild(loginForm);

    const closeButtonContainer = document.createElement( 'div' );
    closeButtonContainer.setAttribute('id', 'close-button-container')
    
    const closeButton = document.createElement('button')
    closeButton.setAttribute('id', 'form-close-button')
    closeButton.textContent = 'X'

    closeButton.addEventListener('click', ()=>{
      loginModal.remove()
      homeDisplay()
    })

    closeButtonContainer.appendChild(closeButton)
    /*-----------------INPUTS-------------------*/

    const emailLabel = document.createElement('div')
    emailLabel.setAttribute('id', 'email-label')
    emailLabel.textContent = 'ingrese su correo electronico'

    const passwordLabel = document.createElement('div')
    passwordLabel.setAttribute('id', 'password-label')
    passwordLabel.textContent = 'ingrese su contraseña'


    const emailInput = createInput('email', 'email', 'Email...')
    emailInput.classList.add('input-correct')

    const passwordInput = createInput('password', 'password', 'Contraseña')
    passwordInput.classList.add('input-correct')
    
    const loginButton = document.createElement("input");
    loginButton.setAttribute("type", "submit");
    loginButton.setAttribute("value", "login");
    loginButton.textContent = "Log in";
    
    const createAccountButton = document.createElement("button");
    createAccountButton.setAttribute("id","create-account-button");
    createAccountButton.textContent = "Crear cuenta";

    createAccountButton.addEventListener('click', ()=>{
      loginModal.remove()
      createAccountDisplay()
    })
    
    appendMultipleChildrens(loginForm, 
      [
        closeButtonContainer, 
        emailLabel, 
        emailInput, 
        passwordLabel, 
        passwordInput, 
        loginButton, 
        createAccountButton
      ])

    /*-----------------API FUNCTIONS-------------------*/
    
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
    
      const formData = new FormData(loginForm);
    
      const email = formData.get("email");
      const password = formData.get("password");
    
  
    
      const user = users.find(user => user.email === email);
    
      if (user) {
        if (user.password === password){
         
   
          setLoggedIn(true, user.role, user.user_id)
          
          loginModal.remove()
          homeDisplay()
        } else {
          console.log('failed')
        }
      } else {
        console.log('user not found ')
        emailInput.classList.remove('input-correct')
        emailInput.classList.toggle('input-error')
        
        passwordInput.classList.remove('input-correct')
        passwordInput.classList.toggle('input-error')
        window.alert('El usuario o contraseña son  incorrectos')
      }
    });
    
    }