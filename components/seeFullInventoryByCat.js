import { cartArray, favBooks } from "../assets/arrays.js";

export const seeFullInventoryByCat = (category, books) =>{
    const displayDiv = document.querySelector('#display-div')
    const fetchCatInventory = (category, books) => {
      //clear out old content before adding new info
  
      // const spacer = document.createElement('div')
       const catInventoryContainer = document.createElement('div')
      // spacer.setAttribute('id', 'cat-spacer')
      const backButtonContainer = document.createElement('div')
      backButtonContainer.setAttribute('id', 'cat-back-button-container')
  
      const backButton =  document.createElement('button')
      backButton.setAttribute('id', 'cat-back-button')
      backButton.innerHTML = 'volver'
  
      backButton.onclick = () =>{
        displayDiv.innerHTML = ''
        homeDisplay();
      } 
  
      backButtonContainer.appendChild(backButton)
  
  
  
      catInventoryContainer.setAttribute('id','cat-inventory-container')
      // displayDiv.appendChild(spacer)
      displayDiv.appendChild(catInventoryContainer)
      displayDiv.appendChild(backButtonContainer)
  
      const filteredBooks = books.filter(book => book.category === category);
      filteredBooks.forEach(book=>{
        console.log(book)
        const inventoryItemRow = document.createElement('div')
        inventoryItemRow.classList.add('inventory-item-row')
        inventoryItemRow.setAttribute('id', `${book.title}` )
  
        const inventoryItemContainer = document.createElement('div')
        inventoryItemContainer.classList.add('inventory-item-container')
  
        const inventoryItemImageContainer = document.createElement('div')
        inventoryItemImageContainer.classList.add('inventory-item-image-container')
  
        const inventoryItemImage = document.createElement('img')
        inventoryItemImage.setAttribute('src', `${book.cover}`)
        inventoryItemImage.setAttribute('alt', `${book.title}`)
        inventoryItemImage.setAttribute('class', 'inventory-item-image')
        
  
        inventoryItemImageContainer.appendChild(inventoryItemImage)
  
        const inventoryItemTitleAuthorContainer = document.createElement('div')
        inventoryItemTitleAuthorContainer.classList.add('inventory-item-title-author-container')
  
        const inventoryItemTitle = document.createElement('h3')
        inventoryItemTitle.textContent= book.title
  
        const inventoryItemAuthor = document.createElement('h3')
        inventoryItemAuthor.textContent= book.author
  
        inventoryItemTitleAuthorContainer.appendChild(inventoryItemTitle)
        inventoryItemTitleAuthorContainer.appendChild(inventoryItemAuthor)
  
        const inventoryItemQuantityPriceContainer = document.createElement('div')
        inventoryItemQuantityPriceContainer.classList.add('inventory-item-quantity-price-container')
  
        const inventoryItemQuantity = document.createElement('h3')
        inventoryItemQuantity.textContent= 'Unidades en stock: ' + book.quantity
  
        const inventoryItemPrice = document.createElement('h3')
        inventoryItemPrice.textContent = 'Precio unitario: ' + '$'+book.price
  
        inventoryItemQuantityPriceContainer.appendChild(inventoryItemQuantity)
        inventoryItemQuantityPriceContainer.appendChild(inventoryItemPrice)
  
        const inventoryItemButtonsContainer = document.createElement('div')
        inventoryItemButtonsContainer.classList.add('inventory-item-buttons-container')
  
        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('add-to-cart-button')
        inventoryItemButtonsContainer.appendChild(addToCartButton)
        addToCartButton.textContent = 'Comprar'
        addToCartButton.onclick = () => {
          cartArray.push(book)
          console.log(cartArray)
        }
        
        const addToFavsButton = document.createElement('button')
        addToFavsButton.classList.add('add-to-favs-button')
        inventoryItemButtonsContainer.appendChild(addToFavsButton)
        addToFavsButton.textContent = 'Favoritos'
        addToFavsButton.onclick = () => {
          const title = inventoryItemRow.id
          favBooks.push(title)
          console.log(favBooks)
        }
  
        inventoryItemContainer.appendChild(inventoryItemImageContainer)
        inventoryItemContainer.appendChild(inventoryItemTitleAuthorContainer)
        inventoryItemContainer.appendChild(inventoryItemQuantityPriceContainer)
        inventoryItemContainer.appendChild(inventoryItemButtonsContainer)
  
        inventoryItemRow.appendChild(inventoryItemContainer)
  
        catInventoryContainer.appendChild(inventoryItemRow)
      })
    }
    try{
      fetchCatInventory(category,books)
    } catch(e){
      console.log('there was an error fetching inventory', e)
    }
  }