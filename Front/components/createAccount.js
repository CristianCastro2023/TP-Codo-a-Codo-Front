import { homeDisplay } from "./homeDisplay.js";
import { userInfo, userdb } from "../assets/lookUp.js";
import { createInput, appendMultipleChildrens } from "../assets/helperFunctions.js";



const users = userInfo
const userDataBase = userdb



export const createAccountDisplay = () =>{

    const body = document.querySelector("body");

const loginModal = document.createElement("div");
loginModal.setAttribute("id", "login-modal-bg");

body.appendChild(loginModal);

const loginForm = document.createElement("form");
loginForm.setAttribute("method", "post");
loginForm.setAttribute("id", "create-account-form");

loginModal.appendChild(loginForm);

const closeButtonContainer = document.createElement("div");
closeButtonContainer.setAttribute('id', 'create-account-form-close-button-container')

const closeButton = document.createElement("button");
closeButton.setAttribute("id", "create-acc-form-close-button");
closeButton.textContent = "X";

closeButton.addEventListener('click', ()=>{
    loginModal.remove()
    homeDisplay()
})

closeButtonContainer.appendChild(closeButton)

/*-----------------INPUTS-------------------*/

const emailInput = createInput('email', 'email', 'Ingrese su correo electrónico...', true)

const emailLabel = document.createElement("div");
emailLabel.textContent = "e-mail";

const  passwordInput = createInput('password','password', 'Contraseña: ', true)

const passwordLabel = document.createElement("div");
passwordLabel.textContent = "contraseña (Al menos 8 caracteres, una mayúscula y un número.)";

const repeatPasswordInput = createInput('password', 'repeat-password', 'Repita su contraseña...', true)

const userNameInput = createInput('text', 'username', 'Ingrese su nombre de usuario...', true)

const usernameLabel = document.createElement("div");
usernameLabel.textContent = "nombre de usuario";

const addressInput = createInput('text', 'address', 'Ingrese su dirección...', true)

const addressLabel = document.createElement("div");
addressLabel.textContent = "Dirección para envíos";

const createAccButton = document.createElement("input");
createAccButton.setAttribute("type", "submit");
createAccButton.setAttribute("value", "crear");

appendMultipleChildrens(loginForm, [
  closeButtonContainer,
  usernameLabel,
  userNameInput,
  emailLabel,
  emailInput,
  passwordLabel,
  passwordInput,
  repeatPasswordInput,
  addressLabel,
  addressInput,
  createAccButton
])

/*-----------------API FUNCTIONS-------------------*/

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  

  const formData = new FormData(loginForm);

  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const address = formData.get("address");
  const role = 'user'

  function addUser(username, email, password, address, role) {
    // Define the data to be sent in the request body
    const userData = {
      username: username,
      email: email,
      password: password,
      address: address,
      role: role
    };

  
    // Make a POST request to the server endpoint
    fetch(userDataBase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify(userData) // Convert the data to JSON format
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      return response.json(); // Parse the response JSON
    })
    .then(data => {
      console.log('User added successfully:', data);
      // Handle success if needed
    })
    .catch(error => {
      console.error('Error adding user:', error.message);
      // Handle error if needed
    });
  }


  const userExists = users.some(user => user.username === username)
  const emailExists = users.some(user => user.email === email)


  const isPasswordOk = () =>{
    const regex = /^(?=.*[A-Z])(?=.*\d).+/
    if (passwordInput.value.length < 8){
      window.alert('La contraseña debe tener al menos 8 caracteres.')
    } else {
      if (passwordInput.value != repeatPasswordInput.value){
        window.alert('Las contraseñas no coinciden.')
      } else {
        if (regex.test(password) && passwordInput.value == repeatPasswordInput.value) {
          return true
        } else if(!regex.test(password)){
          window.alert('Su contraseña debe tener al menos una mayúscula y al menos un número.')
        } 
      }
    }
 
    return false  
}

  const isUsernameOk = () => {
    const regex = /^[a-zA-Z0-9]+$/
    if(userNameInput.value.length < 6){
      window.alert('El nombre de usuario debe contener  al menos 6 caracteres.');
    } else {
      if (regex.test(username)){
        return true;
      } else {
        window.alert('El nombre de usuario solo puede contener letras y números.')
      }
    }
    return false 
  }


if(userExists){
    userNameInput.classList.add('input-error')
    window.alert('Nombre de usuario no disponible')
}
if(emailExists){
  emailInput.classList.add('input-error')
  window.alert('Ya existe una cuenta con este email')
}
if(!userExists && !emailExists && isPasswordOk() && isUsernameOk()){
addUser(username, email, password, address, role)
}
  
  
  
});
}