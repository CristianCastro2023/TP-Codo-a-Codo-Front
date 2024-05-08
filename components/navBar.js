import { logInDisplay } from "./logInDisplay.js";
import { shoppingCartDisplay } from "./shoppingCartDisplay.js";
import { categoriesDisplay } from "./categoriesDisplay.js";
import { displayBooks, favoriteItems } from "../assets/lookUp.js";
import { wishlistDisplay } from "./wishlistDisplay.js";
import { homeDisplay } from "./homeDisplay.js";
import { adminDisplay } from "./adminDisplay.js";
import { userDisplay } from "./userDisplay.js";



const books = displayBooks  




const CATEGORIES = ['ficción', 'historia', 'recetas', 'cómics'];
let PAGE_TITLE = 'AUREA';

export const navBar = ( logged, role, userID) => {
  
 

    const displayDiv = document.querySelector('#display-div')
    const menuCategories = CATEGORIES;
    const navbarContainer = document.querySelector(`#navbar-container`);
    const navbar = document.createElement("nav");
    navbarContainer.appendChild(navbar);
    navbar.setAttribute("id", "navbar");
    navbar.classList.add('hidden')
  
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'page-title');
    navbar.appendChild(titleContainer);
    
  
    const title = document.createElement('div')
    title.textContent = PAGE_TITLE;
    title.setAttribute('id', 'primary-title')
  
    titleContainer.appendChild(title);
  
    title.onclick = () => {
      displayDiv.innerHTML = ''
      homeDisplay()
    }
  
    const toggleMenuButton = document.createElement("button");
  
    const searchBar = document.createElement('input');
    searchBar.setAttribute('id', 'navbar-input');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('placeholder', 'buscar libros...')
  
    titleContainer.appendChild(searchBar);
    titleContainer.appendChild(toggleMenuButton);
    
  
    toggleMenuButton.setAttribute('id', 'toggle-menu-button')
    toggleMenuButton.innerHTML = '<span class="material-symbols-outlined">menu</span>'
  
    toggleMenuButton.onclick=()=>{
      navbar.classList.toggle('show')
    }
  
  
    const categoriesBtn = document.createElement("div");
    categoriesBtn.classList.add('navbar-button');
    categoriesBtn.setAttribute('id', 'navbar-categories');
    categoriesBtn.textContent = 'Categorías';
    categoriesBtn.classList.add('closed')
  
    const wishlist = document.createElement("div");
    wishlist.classList.add('navbar-button');
    wishlist.setAttribute('id', 'navbar-wishlist');
    wishlist.innerHTML = '<span>Deseos</span>' + '<span class="material-symbols-outlined">favorite</span>';
  
    const shoppingCart = document.createElement("div");
    shoppingCart.classList.add('navbar-button');
    shoppingCart.setAttribute('id', 'navbar-shoppingcart');
    shoppingCart.innerHTML = '<span class="material-symbols-outlined">shopping_cart</span>';
  
    const logIn = document.createElement("div");
    logIn.classList.add('navbar-button');
    logIn.setAttribute('id', 'navbar-login');
    logIn.innerHTML = '<span class="material-symbols-outlined">account_circle</span>';

    const admin = document.createElement("div");
    admin.classList.add('navbar-button');
    admin.setAttribute('id', 'navbar-admin');
    admin.innerHTML = '<span class="material-symbols-outlined">shield_person</span>';
  
    

  
    navbar.appendChild(categoriesBtn);
    navbar.appendChild(wishlist);
    navbar.appendChild(shoppingCart);
    navbar.appendChild(logIn);
    if(role === 'admin'){
      navbar.appendChild(admin)
      logIn.remove()
    }
    
   
    const deployMenu = document.createElement('div');
    deployMenu.setAttribute('id', 'deploy-menu');
    deployMenu.className = 'hidden-menu';
    categoriesBtn.appendChild(deployMenu);
  
    categoriesBtn.addEventListener('click', (e) => {
      deployMenu.classList.toggle('show');
      deployMenu.classList.toggle('open');
      e.stopPropagation();
    });
  
    deployMenu.addEventListener('mouseleave', () => {
      deployMenu.classList.remove('show');
    })
  
    document.addEventListener('click', () => {
      deployMenu.classList.remove('show');
    });
  
    menuCategories.forEach(element => {
      const menuLink = document.createElement('a');
      menuLink.textContent = element + '>';
      deployMenu.appendChild(menuLink);
      menuLink.addEventListener('click', () => {
        handleMenuLinkClick(element);
        navbar.classList.remove('show')
      });
    });
  
    function handleMenuLinkClick(str) {
      displayDiv.innerHTML = ''
      PAGE_TITLE = str;
      categoriesDisplay(str, books);
    };
  
    wishlist.addEventListener('click', () => {
      if(logged){
        displayDiv.innerHTML = ''
        wishlistDisplay(logged, role, userID)
        navbar.classList.remove('show')
      } else {
        window.alert('Debe estar loggeado para realizar esta acción')
      }
      
    })
  
    shoppingCart.addEventListener('click', () => {
      displayDiv.innerHTML = ''
      shoppingCartDisplay(userID)
      navbar.classList.remove('show')
    })
  
    logIn.addEventListener('click', ()=>{
      if(logged){
        displayDiv.innerHTML = ''
        userDisplay()
        navbar.classList.remove('show')
      }else{
        displayDiv.innerHTML = ''
        logInDisplay()
        navbar.classList.remove('show')
      }

    })

    admin.addEventListener('click', ()=>{
      displayDiv.innerHTML = ''
      adminDisplay()
      navbar.classList.remove('show')
    })



  }