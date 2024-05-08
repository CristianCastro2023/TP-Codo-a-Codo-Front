import { seeFullInventoryByCat } from "./seeFullInventoryByCat.js";
import { cartArray } from "../assets/arrays.js";
import { getLoggedIn, getUserId, getUserRole } from "../assets/userAuth.js";
import { appendMultipleChildrens } from "../assets/helperFunctions.js";
import { favoritesdb, ordersdb } from "../assets/lookUp.js";
import { initLoadingAnimation, closeLoadingAnimation } from "../assets/helperFunctions.js";

let cart = cartArray


export const categoriesDisplay = (category, books) => {

 

  const log = getLoggedIn()
  const role = getUserRole()
  const userId = getUserId()


    const displayDiv = document.querySelector('#display-div')
    const fetchBooks = (category, books) => {
  
      let mainDiv = document.querySelector('#main-div');
      if (!mainDiv) {
        mainDiv = document.createElement('div');
        mainDiv.setAttribute("id", "main-div");
        mainDiv.setAttribute ('style', `background-image: url(front/assets/wallpapers/${category}-wallpaper.jpg)`)
        displayDiv.appendChild(mainDiv);
        
      }

      const overlay = document.createElement('div');
      overlay.classList.add('overlay')

      const title = document.createElement('h1');
      title.setAttribute("id", "title");
      title.textContent = `Esta es nuestra selección del género ${category}`;
      mainDiv.innerHTML = '';
      mainDiv.appendChild(title);
      const coverContainer = document.createElement('div');
      mainDiv.appendChild(coverContainer);
      coverContainer.setAttribute('id', 'cover-container');
  
      const filteredBooks = books.filter(book => book.category === category);
  
  
  
      // Iterate over the filtered books and create elements for each book
      filteredBooks.slice(0, 5).forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');
        bookContainer.setAttribute('id', `${book.title}`)
        bookContainer.style.backgroundImage = `url(${book.cover})`
        console.log(book.cover)
        bookContainer.style.backgroundSize = `cover`
  
        const bookContainerInfoContainer = document.createElement('div')
        bookContainerInfoContainer.classList.add('book-container-info-container')
        
        const bookContainerInfoContainerButtonsContainer = document.createElement('div')
        bookContainerInfoContainerButtonsContainer.classList.add('book-container-info-buttons-container')
        const bookContainerInfoContainerTextContainer = document.createElement('div')
        bookContainerInfoContainerTextContainer.classList.add('book-container-info-text-container')
        
  
        const bookTitle = document.createElement('h2');
  
        if(book.title.length > 15){
          bookTitle.textContent = book.title.slice(0, 15) + '...';
        } else (
          bookTitle.textContent = book.title
        )
      //   
  
  
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Autor: ${book.author}`;
  
        const bookPrice = document.createElement('p');
        bookPrice.textContent = `Precio: $${book.price.toString()}`;
  
        const buyButton = document.createElement('button')
        buyButton.textContent = 'Comprar'
        buyButton.onclick = () => {
          if (role === 'admin'){
            window.alert('El administrador no puede realizar esta acción.')
          } else {
          if(quantityInput.value === ''){
            window.alert("Ingrese en el recuadro a la derecha del botón 'Comprar' cuantas unidades va a comprar (Mínimo 1).")
          } else {
          const currentQuantity = parseInt(quantityInput.value)
          const bookWithQuantity = {...book, currentQuantity}
          cart.push(bookWithQuantity);
          }
          
          }
          
        }

        const quantityInput = document.createElement('input')
        quantityInput.setAttribute('type', 'number')
        quantityInput.setAttribute('min', '1')
        quantityInput.setAttribute('max', `${book.quantity}`)
        quantityInput.classList.add('quantity-input')
  
        const favButton = document.createElement('button')
        favButton.textContent = '❤️'
  
        favButton.onclick = () => {
          if (role === 'admin'){
            window.alert('El administrador no puede realizar esta acción.')
          } else {
            if(log){
              addFavoriteBook(userId, book.book_id)
            } else {
              window.alert('Debe estar loggeado para realizar esta acción')
            }

          }
          
          
        }
  
        const bookCover = document.createElement('img');
        bookCover.setAttribute('src', book.cover);
        bookCover.setAttribute('alt', book.title);
        bookCover.classList.add('book-cover');

        appendMultipleChildrens(bookContainer,[bookCover, bookContainerInfoContainerTextContainer])

  
        appendMultipleChildrens(bookContainerInfoContainerTextContainer, [
          bookTitle,
          bookAuthor,
          bookPrice,
          bookContainerInfoContainerButtonsContainer,
        ])
        
          appendMultipleChildrens(bookContainerInfoContainerButtonsContainer, [
          buyButton,
          quantityInput,
          favButton,
          ])

        coverContainer.appendChild(bookContainer);
  
      });
  
      const seeMoreButtonContainer = document.createElement('div')
      seeMoreButtonContainer.classList.add('see-more-container')
  
      mainDiv.appendChild(seeMoreButtonContainer)
  
      const seeMoreButton = document.createElement('button');
      seeMoreButton.setAttribute("id", "seeMoreButton");
      seeMoreButton.textContent = "Ver más...";
      seeMoreButtonContainer.appendChild(seeMoreButton)
      seeMoreButton.addEventListener('click', () => {
        mainDiv.remove()
        seeFullInventoryByCat(category, books)
      })

      function addFavoriteBook(user_id, book_id){
        const favBookData = {
          user_id: user_id,
          book_id: book_id
        }
        fetch(favoritesdb, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': '*/*'
          },
          body: JSON.stringify(favBookData) 
      }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to add favorite');
        }
        return response.json(); // Parse the response JSON
    })
    .then(data => {
        console.log('favorite added successfully:', data);
        // After successfully adding a book, fetch updated book data
    })
    .catch(error => {
        console.error('Error adding favorite:', error.message);
    });


      }



  
    }
    try {
      initLoadingAnimation()
      fetchBooks(category, books)
      closeLoadingAnimation()
    } catch (e) {
      console.error('there was an issue fetching books', e)
    }
  }//creates a screen when a category is selected from the navbar dropdown