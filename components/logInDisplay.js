export const logInDisplay = () => {
    const body = document.querySelector('body');
    const loginModal = document.createElement("div");
    loginModal.setAttribute("id", "login-modal-bg");
    
    body.appendChild(loginModal);
    
    const loginForm = document.createElement("form");
    loginForm.setAttribute("method", "post");
    loginForm.setAttribute("id", "login-form");
    
    loginModal.appendChild(loginForm);
    
    
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
    
    loginForm.appendChild(emailInput);
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