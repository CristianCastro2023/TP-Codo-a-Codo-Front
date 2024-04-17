import {homeDisplay} from './homeDisplay.js'

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

    const emailLabel = document.createElement('div')
    emailLabel.setAttribute('id', 'email-label')
    emailLabel.textContent = 'ingrese su correo electronico'

    const passwordLabel = document.createElement('div')
    passwordLabel.setAttribute('id', 'password-label')
    passwordLabel.textContent = 'ingrese su contraseña'
    
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");
    
    const loginButton = document.createElement("input");
    loginButton.setAttribute("type", "submit");
    loginButton.setAttribute("value", "login");
    loginButton.textContent = "Log in";
    
    const createAccountButton = document.createElement("button");
    createAccountButton.setAttribute("id","create-account-button");
    createAccountButton.textContent = "Crear cuenta";
    
    loginForm.appendChild(closeButtonContainer)
    loginForm.appendChild(emailLabel);
    loginForm.appendChild(emailInput);
    loginForm.appendChild(passwordLabel);
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(loginButton);
    loginForm.appendChild(createAccountButton);
    
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
    
      const formData = new FormData(loginForm);
    
      const email = formData.get("email");
      const password = formData.get("password");
    
      console.log(email, password);
    
      //const isValid = validateLoginForm(formData);
    
      //if (isValid) {
      //    await submitLoginForm(formData);
      //} else {
      //    alert('Please fill in all fields.');
      //}
    });
    
    }