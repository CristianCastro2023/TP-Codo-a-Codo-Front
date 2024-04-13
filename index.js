import { displayBooks } from "./assets/lookUp.js";




const CATEGORIES = ['ficción', 'historia', 'recetas', 'cómics'];//add categories here, they'll be dinamically added to the dropdown menu of the navbar

let PAGE_TITLE = 'AUREA';

const books = displayBooks;

const favBooks = [];

const cartArray = [];

const body = document.querySelector('body');
const navbarContainer = document.querySelector(`#navbar-container`);
const displayDiv = document.querySelector('#display-div');

const initialize = () => {
  navBar(CATEGORIES, PAGE_TITLE);
  homeDisplay();
}

 


const navBar = (arr, name) => {
  const menuCategories = arr;

  const navbar = document.createElement("nav");
  navbarContainer.appendChild(navbar);
  navbar.setAttribute("id", "navbar");
  navbar.classList.add('hidden')

  const title = document.createElement('div');
  title.setAttribute('id', 'page-title');
  title.textContent = name;
  navbar.appendChild(title);

  const toggleMenuButton = document.createElement("button");

  const searchBar = document.createElement('input');
  searchBar.setAttribute('id', 'navbar-input');
  searchBar.setAttribute('type', 'text');
  searchBar.setAttribute('placeholder', 'buscar libros...')

  title.appendChild(searchBar);
  title.appendChild(toggleMenuButton);
  

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

  navbar.appendChild(categoriesBtn);
  navbar.appendChild(wishlist);
  navbar.appendChild(shoppingCart);
  navbar.appendChild(logIn);

  // Agrega el evento de clic para redirigir al usuario a la página de inicio de sesión
 logIn.addEventListener('click', () => {
  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = 'login.html';
});


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
    displayDiv.innerHTML = ''
    wishlistDisplay(favBooks)
    navbar.classList.remove('show')
  })

  shoppingCart.addEventListener('click', () => {
    displayDiv.innerHTML = ''
    shoppingCartDisplay(cartArray)
    navbar.classList.remove('show')
  })
}

const homeDisplay = () => {
  const homeContainer = document.createElement('div')
  homeContainer.setAttribute('id', 'home')
  displayDiv.appendChild(homeContainer)

  const placeholder = document.createElement('div')
  placeholder.setAttribute('id', 'placeholder')
  placeholder.textContent = 'placeholder para info del home'

  //const footer = document.createElement('div');
  //footer.setAttribute("id", "footer");
  //footer.innerHTML = 'trabajo práctico para Codo a Codo - 2024. Contáctenos <a href="mailto:address@gmail.com"><span class="material-symbols-outlined" id="email-icon">alternate_email</span></a>'

  homeContainer.appendChild(placeholder)
  //homeContainer.appendChild(footer)
} //this is the main screen when the app loads

const categoriesDisplay = (category, books) => {

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
    filteredBooks.forEach(book => {
      const bookContainer = document.createElement('div');
      bookContainer.classList.add('book-container');
      bookContainer.setAttribute('id', `${book.title}`)

      const bookContainerInfoContainer = document.createElement('div')
      bookContainerInfoContainer.classList.add('book-container-info-container')

      

      const bookTitle = document.createElement('h2');

      if(book.title.length > 15){
        bookTitle.textContent = book.title.slice(0, 10) + '...';
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
        cartArray.push(book);
        console.log(cartArray);
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
      bookContainerInfoContainer.appendChild(bookTitle);
      bookContainerInfoContainer.appendChild(bookAuthor);
      bookContainerInfoContainer.appendChild(bookPrice);
      bookContainerInfoContainer.appendChild(buyButton);
      bookContainerInfoContainer.appendChild(favButton);


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
    console.error('there was an issue fetching books')
  }
}//creates a screen when a category is selected from the navbar dropdown

const seeFullInventoryByCat = (category, books) =>{
  const fetchCatInventory = (category, books) => {
    //clear out old content before adding new info

    const spacer = document.createElement('div')
    const catInventoryContainer = document.createElement('div')
    spacer.setAttribute('id', 'cat-spacer')
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
    displayDiv.appendChild(spacer)
    displayDiv.appendChild(catInventoryContainer)
    displayDiv.appendChild(backButtonContainer)

    const filteredBooks = books.filter(book => book.category === category);
    filteredBooks.forEach(book=>{
      console.log(book)
      const inventoryItemRow = document.createElement('div')
      inventoryItemRow.classList.add('inventory-item-row')

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

      inventoryItemContainer.appendChild(inventoryItemImageContainer)
      inventoryItemContainer.appendChild(inventoryItemTitleAuthorContainer)
      inventoryItemContainer.appendChild(inventoryItemQuantityPriceContainer)

      inventoryItemRow.appendChild(inventoryItemContainer)

      catInventoryContainer.appendChild(inventoryItemRow)
    })
  }
  try{
    fetchCatInventory(category,books)
  } catch(e){
    console.log(e)
  }
}

const wishlistDisplay = () => {
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
    console.error('there was an issue fetching favorite books')
  }
}//this function creates a list for your fav picks later it should create custom notifications for possible offers or bundles

const shoppingCartDisplay = () => {
  const fetchShoppinCart = (arr) => {
    const modalBackground = document.createElement("div");
    modalBackground.setAttribute("id", "modal-background");
    body.appendChild(modalBackground);

    const emptyMsg = document.createElement('h1')
    emptyMsg.textContent = 'Aún no hay nada por aquí...'

    const shoppingCartContainer = document.createElement("div");
    shoppingCartContainer.setAttribute("id", "shoppingcart-container")
    modalBackground.appendChild(shoppingCartContainer)

    arr.length > 1 ? shoppingCartContainer.classList.add('shoppingcart-container-large') : ''

    const closeButtonContainer = document.createElement("div");
    closeButtonContainer.setAttribute('id', 'close-btn-container')
    shoppingCartContainer.appendChild(closeButtonContainer)

    arr.length === 0 ? shoppingCartContainer.appendChild(emptyMsg) : ''

    const closeButton = document.createElement("button");
    closeButton.setAttribute("id", "close-button");
    closeButton.textContent = 'X'
    closeButtonContainer.appendChild(closeButton)

    const shoppingCartDisplay = document.createElement('div')
    shoppingCartContainer.appendChild(shoppingCartDisplay)
    shoppingCartDisplay.setAttribute('id', 'shopping-cart-display')

    let priceAcc = 0
    cartArray.forEach(book => {

      const shoppingCartCover = document.createElement('div')
      shoppingCartCover.setAttribute('class', 'shoppingcart-cover');
      shoppingCartDisplay.appendChild(shoppingCartCover)

      const bookCover = document.createElement('div')
      bookCover.setAttribute('class', 'book-cover')
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

    if (arr.length >= 1) {
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
      boughtArr.push(arr)
      cartArray.splice(0, arr.length);
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
    fetchShoppinCart(cartArray);
  } catch (e) {
    console.error('There was en error fetching your cart')
  }
}

initialize()//main entry point
