
import { initLoadingAnimation, closeLoadingAnimation } from "../assets/helperFunctions.js";
import { favoritesdb, displayBooks } from "../assets/lookUp.js";



export const wishlistDisplay = (logged, role, userID) => {
  const favBooks = [];
  initLoadingAnimation()//spinner
  
  async function getFavItemsByUser(user, displayBooks) {
    
    try {
      const response = await fetch(favoritesdb);
      if (!response.ok) {
        throw new Error('Failed to fetch favorite items');
      }
      const favoriteItems = await response.json();
      
     
      favoriteItems
        .filter(item => item.user_id === user)
        .forEach(favoriteItem => {
          const favoriteBookId = favoriteItem.book_id;
          const correspondingBook = displayBooks.find(book => book.book_id === favoriteBookId);
          if (correspondingBook) {
            favBooks.push(correspondingBook);
          }
        });
    } catch (error) {
      console.error('Error fetching or processing favorite items:', error);
      return []; 
    }
    
  }
  
  if (logged) {

    
    (async () => {

      await getFavItemsByUser(userID, displayBooks);
      
      fetchFavs(favBooks)
      closeLoadingAnimation()
    })();
    
  }


  
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
        title.textContent = book.title;
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
  }//this function creates a list for your fav picks later it should create custom notifications for possible offers or bundles