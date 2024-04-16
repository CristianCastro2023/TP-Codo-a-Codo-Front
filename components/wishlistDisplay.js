import { cartArray, favBooks } from "../assets/arrays.js";

export const wishlistDisplay = (favBooks) => {
    const displayDiv = document.querySelector('#display-div')
    const fetchFavs = (arr) => {
      const wishlistContainer = document.createElement('div');
      wishlistContainer.setAttribute('id', 'wishlist-container');
      displayDiv.appendChild(wishlistContainer);
      arr.forEach(book => {
        const removeButtonColumn = document.createElement('div')
        removeButtonColumn.classList.add('remove-button-column')
  
        const titleColumn = document.createElement('div')
        titleColumn.classList.add('title-column')
  
        const iconColumn = document.createElement('div')
        iconColumn.classList.add('icon-column')
  
        const buttonColumn = document.createElement('div')
        buttonColumn.classList.add('button-column')
  
        const wishRow = document.createElement('div');
        wishRow.classList.add('wish-row')
        wishRow.setAttribute('id', `${book.title}`)
  
        let title = document.createElement('h2')
        title.textContent = book;
        titleColumn.appendChild(title);
  
  
        let icon = document.createElement('h3')
        icon.innerHTML = '<span class="material-symbols-outlined">favorite</span>'
        iconColumn.appendChild(icon);
  
        const removeButton = document.createElement('button')
        removeButton.classList.add('remove-button')
        buttonColumn.appendChild(removeButton)
        removeButton.textContent = 'remover'
        removeButton.onclick = () => {
          const currentRow = document.getElementById(book.title);
          if (currentRow) {
            currentRow.remove();
          } else {
            console.error('element not found');
          }
        }
  
  
        wishRow.appendChild(titleColumn)
        wishRow.appendChild(iconColumn)
        wishRow.appendChild(buttonColumn)
        wishlistContainer.appendChild(wishRow)
      })
    }
    try {
      fetchFavs(favBooks)
    } catch (e) {
      console.error('there was an issue fetching favorite books', e)
    }
  }//this function creates a list for your fav picks later it should create custom notifications for possible offers or bundles