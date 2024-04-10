import { Book, displayBooks } from "./assets/lookUp.js";

const books = displayBooks

const categories = ['ficción', 'historia', 'recetas', 'cómics'];
let currentPageTitle = 'AUREA';

const body = document.querySelector('body');
const navbarContainer = document.querySelector(`#navbar-container`);
const displayDiv = document.querySelector('#display-div');

const navBar = (arr, name) => {
    const menuCategories = arr;

    const navbar = document.createElement("nav");
    navbarContainer.appendChild(navbar);
    navbar.setAttribute("id", "navbar");

    const categoriesBtn = document.createElement("div");
    categoriesBtn.classList.add('navbar-button');
    categoriesBtn.setAttribute('id', 'navbar-categories');
    categoriesBtn.textContent = 'Categorías';

    const wishlist = document.createElement("div");
    wishlist.classList.add('navbar-button');
    wishlist.setAttribute('id', 'navbar-wishlist');
    wishlist.innerHTML = 'Deseos ' + '<span class="material-symbols-outlined">favorite</span>';

    const shoppingCart = document.createElement("div");
    shoppingCart.classList.add('navbar-button');
    shoppingCart.setAttribute('id', 'navbar-shoppingcart');
    shoppingCart.innerHTML = '<span class="material-symbols-outlined">shopping_cart</span>';

    const logIn = document.createElement("div");
    logIn.classList.add('navbar-button');
    logIn.setAttribute('id', 'navbar-login');
    logIn.innerHTML = '<span class="material-symbols-outlined">account_circle</span>';

    const searchBar = document.createElement('input');
    searchBar.setAttribute('id', 'navbar-input');
    searchBar.setAttribute('type', 'text');

    const title = document.createElement('div');
    title.setAttribute('id', 'page-title');
    title.textContent = name;

    navbar.appendChild(categoriesBtn);
    navbar.appendChild(wishlist);
    navbar.appendChild(title);
    navbar.appendChild(searchBar);
    navbar.appendChild(shoppingCart);
    navbar.appendChild(logIn);

    const deployMenu = document.createElement('div');
    deployMenu.setAttribute('id', 'deploy-menu');
    deployMenu.className = 'hidden';
    categoriesBtn.appendChild(deployMenu);

    categoriesBtn.addEventListener('click', (e) => {
        deployMenu.classList.toggle('show');
        e.stopPropagation();
    });

    deployMenu.addEventListener('mouseleave',()=>{
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
        });
    });
  
    function handleMenuLinkClick(str) {
        displayDiv.innerHTML= ''
        currentPageTitle = str;
        categoriesDisplay(str, books);

    };

    wishlist.addEventListener('click', ()=>{
        displayDiv.innerHTML=''
        wishlistDisplay(books)
         
    })

    shoppingCart.addEventListener('click', ()=>{
        displayDiv.innerHTML=''
        shoppingCartDisplay(books)
    })
}

const homeDisplay = () =>{
    const homeContainer = document.createElement('div')
    homeContainer.setAttribute('id', 'home')
    displayDiv.appendChild(homeContainer)

    const placeholder = document.createElement('div')
    placeholder.setAttribute('id','placeholder')
    placeholder.textContent='placeholder para info del home'

    const footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    footer.innerHTML ='trabajo práctico para Codo a Codo - 2024. Contáctenos <a href="mailto:address@gmail.com"><span class="material-symbols-outlined" id="email-icon">alternate_email</span></a>'
    
    homeContainer.appendChild(placeholder)
    homeContainer.appendChild(footer)
}

const categoriesDisplay = (category, books) => {
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
    coverContainer.setAttribute('id','cover-container');
    console.log(books)

    const filteredBooks = books.filter(book => book.category === category);


    
    // Iterate over the filtered books and create elements for each book
    filteredBooks.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Autor: ${book.author}`;

        const bookPrice = document.createElement('p');
        bookPrice.textContent = `Precio: ${book.price}`;

        const buyButton = document.createElement('button')
        buyButton.textContent = 'Comprar'

        const bookCover = document.createElement('img');
        bookCover.setAttribute('src', book.cover);
        bookCover.setAttribute('alt', book.title);
        bookCover.classList.add( 'book-cover' );
        bookContainer.appendChild(bookCover);
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPrice);
        bookContainer.appendChild(buyButton);
        

        coverContainer.appendChild(bookContainer);

        buyButton.addEventListener('click', ()=>{
            console.log('comprado!')
        })
    });

    const seeMoreButton = document.createElement('button');
    seeMoreButton.setAttribute("id", "seeMoreButton");
    seeMoreButton.textContent="Ver más...";
    mainDiv.appendChild(seeMoreButton)
    seeMoreButton.addEventListener('click',()=>{
        console.log('Ver más!')
    })
}

const wishlistDisplay = (books) =>{
    console.log(books)
    const wishlistContainer=document.createElement('div');
    displayDiv.appendChild(wishlistContainer);
    books.forEach(book=>{
        const removeButtonColumn = document.createElement('div')
        removeButtonColumn.classList.add('remove-button-column')

        const titleColumn = document.createElement('div')
        titleColumn.classList.add('title-column')

        const authorColumn = document.createElement('div')
        authorColumn.classList.add('author-column')

        const iconColumn = document.createElement('div')
        iconColumn.classList.add('icon-column')

        const wishRow = document.createElement('div');
        wishRow.classList.add('wish-row')

        let title = document.createElement('h2')
        title.textContent = book.title;
        titleColumn.appendChild(title);

        let author = document.createElement('h3')
        author.textContent= book.author
        authorColumn.appendChild(author);

        let icon = document.createElement('h3')
        icon.innerHTML= '<span class="material-symbols-outlined">favorite</span>'
        iconColumn.appendChild(icon);

        const removeButton = document.createElement('button')
        removeButton.classList.add('remove-button')
        removeButtonColumn.appendChild(removeButton)
        removeButton.textContent = 'remover'
        
        wishRow.appendChild(titleColumn)
        wishRow.appendChild(authorColumn)
        wishRow.appendChild(iconColumn)
        wishRow.appendChild(removeButton) 
        wishlistContainer.appendChild(wishRow)
    }) 
}

const shoppingCartDisplay = (books) => {
    const modalBackground = document.createElement( "div" );
    modalBackground.setAttribute("id", "modal-background");
    body.appendChild(modalBackground);

    const shoppingCartContainer = document.createElement( "div" );
    shoppingCartContainer.setAttribute("id","shoppingcart-container")
    modalBackground.appendChild(shoppingCartContainer)

    const closeButtonContainer = document.createElement("div");
    closeButtonContainer.setAttribute('id', 'close-btn-container')
    shoppingCartContainer.appendChild(closeButtonContainer)

    const closeButton = document.createElement("button");
    closeButton.setAttribute("id", "close-button");
    closeButton.textContent = 'X'
    closeButtonContainer.appendChild(closeButton)

    const shoppingCartCover = document.createElement('div')
    shoppingCartCover.setAttribute('id','shoppingcart-cover');
    shoppingCartContainer.appendChild(shoppingCartCover)

    const bookCover = document.createElement('div')
    bookCover.setAttribute('id', 'book-cover')
    shoppingCartCover.appendChild(bookCover)

    const bookCoverContent = document.createElement('img')
    bookCoverContent.setAttribute('id', 'book-cover-content')
    bookCoverContent.setAttribute('src', `${books[0].cover}`)
    bookCoverContent.setAttribute('alt', `${books[0].title}`)
    bookCover.appendChild(bookCoverContent)

    const bookInfo = document.createElement( "div" )
    bookInfo.setAttribute('id', 'book-info')
    shoppingCartCover.appendChild(bookInfo)

    const bookTitle = document.createElement('h2')
    bookTitle.textContent= books[0].title; 

    const bookPrice  = document.createElement('h1')
    bookPrice.textContent=`Total: ${books[0].price}`

    const additionalInfo = document.createElement('p')
    additionalInfo.textContent = 'Envío sin costo!'

    bookInfo.appendChild(bookTitle)
    bookInfo.appendChild(bookPrice)
    bookInfo.appendChild(additionalInfo)

    const operationBtnContainer = document.createElement("div");
    operationBtnContainer.setAttribute("id", "operation-btn-container");
    shoppingCartContainer.appendChild(operationBtnContainer)

    const buyButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    buyButton.textContent = "comprar"
    cancelButton.textContent = 'cancelar'

    operationBtnContainer.appendChild(buyButton)
    operationBtnContainer.appendChild(cancelButton)

    buyButton.onclick =()=>{console.log('comprado')}
    cancelButton.onclick =()=>{console.log('cancelado')}

    closeButton.onclick = () =>{
        modalBackground.remove()
        homeDisplay()
    }

}

navBar(categories, currentPageTitle);
homeDisplay();


