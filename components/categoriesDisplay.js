import { seeFullInventoryByCat } from "./seeFullInventoryByCat.js";
import { cartArray, favBooks } from "../assets/arrays.js";

let cart = cartArray

export const categoriesDisplay = (category, books) => {
    const displayDiv = document.querySelector('#display-div')
    const fetchBooks = (category, books) => {
  
      let mainDiv = document.querySelector('#main-div');
      if (!mainDiv) {
        mainDiv = document.createElement('div');
        mainDiv.setAttribute("id", "main-div");
        displayDiv.appendChild(mainDiv);
      }
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
      filteredBooks.slice(0, 4).forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');
        bookContainer.setAttribute('id', `${book.title}`)
        bookContainer.style.backgroundImage = `url(${book.cover})`
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
          cart.push(book);
          console.log(cart);
        }
  
        const favButton = document.createElement('button')
        favButton.textContent = '❤️'
  
        favButton.onclick = () => {
          const title = bookContainer.id
          favBooks.push(title)
        }
  
        const bookCover = document.createElement('img');
        bookCover.setAttribute('src', book.cover);
        bookCover.setAttribute('alt', book.title);
        bookCover.classList.add('book-cover');
        bookContainer.appendChild(bookCover);
        bookContainer.appendChild(bookContainerInfoContainer)
  
        bookContainerInfoContainer.appendChild(bookContainerInfoContainerTextContainer)
        bookContainerInfoContainer.appendChild(bookContainerInfoContainerButtonsContainer)
  
        bookContainerInfoContainerTextContainer.appendChild(bookTitle);
        bookContainerInfoContainerTextContainer.appendChild(bookAuthor);
        bookContainerInfoContainerTextContainer.appendChild(bookPrice);
        bookContainerInfoContainerButtonsContainer.appendChild(buyButton);
        bookContainerInfoContainerButtonsContainer.appendChild(favButton);
  
  
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
  
    }
    try {
      fetchBooks(category, books)
    } catch (e) {
      console.error('there was an issue fetching books', e)
    }
  }//creates a screen when a category is selected from the navbar dropdown