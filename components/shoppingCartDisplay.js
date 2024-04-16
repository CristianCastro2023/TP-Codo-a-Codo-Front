import { cartArray, favBooks } from "../assets/arrays.js";
import { homeDisplay } from "./homeDisplay.js";



export const shoppingCartDisplay = () => {

  let cart = cartArray

    const fetchShoppinCart = (cart) => {

    const body = document.querySelector('body');

    

      const modalBackground = document.createElement("div");
      modalBackground.setAttribute("id", "modal-background");
      body.appendChild(modalBackground);
  
      const emptyMsg = document.createElement('h1')
      emptyMsg.textContent = 'Aún no hay nada por aquí...'
  
      const shoppingCartContainer = document.createElement("div");
      shoppingCartContainer.setAttribute("id", "shoppingcart-container")
      modalBackground.appendChild(shoppingCartContainer)
  
      cart.length > 1 ? shoppingCartContainer.classList.add('shoppingcart-container-large') : ''
  
      const closeButtonContainer = document.createElement("div");
      closeButtonContainer.setAttribute('id', 'close-btn-container')
      shoppingCartContainer.appendChild(closeButtonContainer)
  
      cart.length === 0 ? shoppingCartContainer.appendChild(emptyMsg) : ''
  
      const closeButton = document.createElement("button");
      closeButton.setAttribute("id", "close-button");
      closeButton.textContent = 'X'
      closeButtonContainer.appendChild(closeButton)
  
      const shoppingCartDisplay = document.createElement('div')
      shoppingCartContainer.appendChild(shoppingCartDisplay)
      shoppingCartDisplay.setAttribute('id', 'shopping-cart-display')
  
      let priceAcc = 0
      cart.forEach(book => {
  
        const shoppingCartCover = document.createElement('div')
        shoppingCartCover.setAttribute('class', 'shoppingcart-cover');
        shoppingCartDisplay.appendChild(shoppingCartCover)
  
        const bookCover = document.createElement('div')
        bookCover.setAttribute('class', 'book-cover-cart')
        shoppingCartCover.appendChild(bookCover)
  
        const bookCoverContent = document.createElement('img')
        bookCoverContent.setAttribute('class', 'book-cover-content')
        bookCoverContent.setAttribute('src', `${book.cover}`)
        bookCoverContent.setAttribute('alt', `${book.title}`)
        bookCover.appendChild(bookCoverContent)
  
        const bookInfo = document.createElement("div")
        bookInfo.setAttribute('class', 'book-info')
        shoppingCartCover.appendChild(bookInfo)
  
        const bookTitle = document.createElement('h2')
        bookTitle.textContent = book.title;
  
        const additionalInfo = document.createElement('p')
        additionalInfo.textContent = 'Envío sin costo!'
  
        bookInfo.appendChild(bookTitle)
        bookInfo.appendChild(additionalInfo)
  
        priceAcc += book.price
        console.log(priceAcc);
      })
  
      const totalTextContainer = document.createElement('div')
      totalTextContainer.setAttribute("id", "total-text-container")
  
      const totalText = document.createElement('h2')
      totalText.textContent = `Tu total es $${priceAcc}`
  
      if (cart.length >= 1) {
        totalTextContainer.appendChild(totalText)
      }
  
      shoppingCartContainer.appendChild(totalTextContainer)
  
      const operationBtnContainer = document.createElement("div");
      operationBtnContainer.setAttribute("id", "operation-btn-container");
      shoppingCartContainer.appendChild(operationBtnContainer)
  
      const buyButton = document.createElement("button");
      const cancelButton = document.createElement("button");
      buyButton.textContent = "comprar"
      cancelButton.textContent = 'cancelar'
  
      operationBtnContainer.appendChild(buyButton)
      operationBtnContainer.appendChild(cancelButton)
      let boughtArr = []
  
      buyButton.onclick = () => {
        boughtArr.push(cart)
        cartArray.splice(0, cart.length);
        homeDisplay()
        return boughtArr
      }
      cancelButton.onclick = () => { console.log('cancelado') }
  
      closeButton.onclick = () => {
        modalBackground.remove()
        homeDisplay()
      }
    }
    try {
      fetchShoppinCart(cart);
    } catch (e) {
      console.error('there was an error fetching shopping cart', e)
    }
  }