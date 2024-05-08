import { displayBooks, booksdb } from "../assets/lookUp.js";
import { createInput, appendMultipleChildrens } from "../assets/helperFunctions.js";



export const adminDisplay = () => {
    const displayDiv = document.querySelector('#display-div');
    

    /*------------TABLE CONTAINER-----------*/
    const tableContainer = document.createElement('div');
    tableContainer.setAttribute("id", "table-container");

    const booksTable = document.createElement('table');
    booksTable.classList.add('book-table');

    // Function to render the books table with provided book data
    function renderBooksTable(booksData) {
        // Clear existing table content
        booksTable.innerHTML = '';

       

        // Create table rows for each book
        booksData.forEach(book => {
            const row = document.createElement('tr');
            row.classList.add('table-row')
            const bookData = [book.book_id, book.title, book.author, book.cover, book.price, book.category, book.quantity]; // Adjust as per your book data structure
            bookData.forEach((cellData, index) => {
                const cell = document.createElement('td');
                if (cellData && cellData.length > 15) {
                cell.textContent = cellData.slice(0, 14) + "...";
                } else {
                cell.textContent = cellData || '';
                }
                cell.classList.add('table-cell');
                if (index === 0) { // Adjust width for the first column
                    cell.style.width = "3%"; 
                } else if (index === 1) {  
                    cell.style.width = "15%";
                } else if (index === 2) { 
                    cell.style.width = "10%"; 
                } else if (index === 3) { 
                    cell.style.width = "15%"; 
                } else if (index === 4) {
                    cell.style.width = "10%"; 
                } else if (index === 5) { 
                    cell.style.width = "15%"; 
                } else if (index === 6) { 
                    cell.style.width = "10%"; 
                } else if (index === 7) {
                    cell.style.width = "15%";
                }
                row.appendChild(cell);
                
                
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.classList.add('row-button')
            deleteBtn.onclick = (e) => {
                const confirmation = window.prompt('Esta acción no se puede deshacer. Escriba - ok - para continuar.')
                if(confirmation === 'ok'){
                    deleteBook(book.book_id)
                } 
            }
            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Modificar';
            updateBtn.classList.add('row-button')
            updateBtn.onclick = ()=> {
                    updateBookForm.classList.remove('updateform-hidden')
                    updateBookForm.classList.toggle('updateform-show', true)
                    // Populate the update form with the details of the corresponding book
                    idInputUpdate.value = book.book_id;
                    titleInputUpdate.value = book.title;
                    authorInputUpdate.value = book.author;
                    coverInputUpdate.value = book.cover;
                    priceInputUpdate.value = book.price;
                    categoryInputUpdate.value = book.category;
                    quantityInputUpdate.value = book.quantity;
                
                
            }
            appendMultipleChildrens(row, [deleteBtn, updateBtn])
            booksTable.appendChild(row);
        });
    }

    const booksHeaderRow = document.createElement('div');
        booksHeaderRow.setAttribute('class', 'header-row')
        const booksHeaders = ['ID', 'Título', 'Autor', 'Cover', 'Precio', 'Categoria', 'Stock', 'Opciones']; 
        booksHeaders.forEach(headerText => {
            const th = document.createElement('h3');
            th.textContent = headerText;
            booksHeaderRow.appendChild(th);
        });


    // Render initial table with displayBooks
    renderBooksTable(displayBooks);

    const formsContainer = document.createElement('div');
    formsContainer.classList.add('forms-container');
  

    
    /*----------------ADD BOOK FORM-----------------*/
    const addBookForm = document.createElement('form');
    addBookForm.classList.add('book-form-hidden');
    addBookForm.setAttribute('method', 'post');

    const updateBookForm = document.createElement('form')
    updateBookForm.classList.add('update-book-form');
    updateBookForm.classList.add('updateform-hidden');
    updateBookForm.setAttribute('method', 'post');
    

    /*-----------------INPUTS-------------------*/

    const titleInput = createInput('text', 'title',  'Titulo', true)
    const authorInput = createInput('text', 'author',  'Autor', true)
    const coverInput = createInput('text', 'cover',  'Ruta de la imagen', true)
    const priceInput = createInput('text', 'price',  'Precio', true)
    const categoryInput = createInput('text', 'category',  'Categoria', true)
    const quantityInput = createInput('text', 'quantity',  'Cantidad en Stock', true)


    const updateBookFormTitle = document.createElement('div')
    updateBookFormTitle.textContent = 'MODIFICAR'
    const idInputUpdate = createInput('text', 'id',  'ID', true)
    idInputUpdate.setAttribute("readonly", "true");
    idInputUpdate.style.display = 'none'
    const titleInputUpdate = createInput('text', 'title',  'Titulo', true)
    const authorInputUpdate = createInput('text', 'author',  'Autor', true)
    const coverInputUpdate = createInput('text', 'cover',  'Ruta de la imagen', true)
    const priceInputUpdate = createInput('text', 'price',  'Precio', true)
    const categoryInputUpdate = createInput('text', 'category',  'Categoria', true)
    const quantityInputUpdate = createInput('text', 'quantity',  'Cantidad en Stock', true)
    

    const formButtonSubmit = document.createElement("input");
    formButtonSubmit.setAttribute("type", "submit");
    formButtonSubmit.setAttribute("value", "añadir");

    const updateButtonSubmit = document.createElement("input");
    updateButtonSubmit.setAttribute("type", "submit");
    updateButtonSubmit.setAttribute("value", "actualizar");

    const updateCloseButton = document.createElement('button')
    updateCloseButton.classList.add('updateform-close-btn')
    updateCloseButton.textContent = 'Cerrar'
    updateCloseButton.onclick = () =>{
        updateBookForm.classList.add('updateform-hidden')
    }


    //UPDATE BOOK
    appendMultipleChildrens(updateBookForm,[
        updateBookFormTitle,
        idInputUpdate,
        titleInputUpdate,
        authorInputUpdate,
        coverInputUpdate,
        priceInputUpdate,
        categoryInputUpdate,
        quantityInputUpdate,
        updateButtonSubmit,
        updateCloseButton
    ])
    //ADD BOOK
    appendMultipleChildrens(addBookForm, [
        titleInput,
        authorInput,
        coverInput,
        priceInput,
        categoryInput,
        quantityInput,
        formButtonSubmit
    ])

    /*-----------------BUTTON-------------------*/
    const addBookButton = document.createElement('button');
    addBookButton.textContent = 'AGREGAR NUEVO LIBRO';

    addBookButton.onclick = () => {
        addBookForm.classList.toggle('book-form-show');
    };

    const areaTitle = document.createElement('h1')
    areaTitle.textContent='Control y manejo de stock'
    areaTitle.classList.add('stock-management-title')

    appendMultipleChildrens(displayDiv, [areaTitle, booksHeaderRow,tableContainer]);
    appendMultipleChildrens(tableContainer,[booksTable, formsContainer])
    appendMultipleChildrens(formsContainer, [updateBookForm, addBookButton, addBookForm]);

    /*-----------------API FUNCTIONS-------------------*/

    /*-------------ADD BOOK------------*/

addBookForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(addBookForm);
        const title = formData.get('title');
        const author = formData.get('author');
        const cover = formData.get('cover');
        const price = formData.get('price');
        const category = formData.get('category');
        const quantity = formData.get('quantity');

        // Function to push a new book to the database
        function addBook(title, author, cover, price, category, quantity) {
            const bookData = {
                title: title,
                author: author,
                cover: cover,
                price: price,
                category: category,
                quantity: quantity
            };

            fetch(booksdb, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify(bookData) 
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add book');
                }
                return response.json(); // Parse the response JSON
            })
            .then(data => {
                console.log('Book added successfully:', data);
                // After successfully adding a book, fetch updated book data
                fetchBooksData();
            })
            .catch(error => {
                console.error('Error adding book:', error.message);
            });
        }

        addBook(title, author, cover, price, category, quantity);
    });

    /*-------------UPDATE BOOK------------*/

updateBookForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const formData = new FormData(updateBookForm);
        const book_id = formData.get('id')
        const title = formData.get('title');
        const author = formData.get('author');
        const cover = formData.get('cover');
        const price = formData.get('price');
        const category = formData.get('category');
        const quantity = formData.get('quantity');
        const bookIdNum = formData.get('id')
    
        // Function to update the book in the database
        function updateBook(book_id, title, author, cover, price, category, quantity, bookIdNum) {
            const bookData = {
                book_id: book_id,
                title: title,
                author: author,
                cover: cover,
                price: price,
                category: category,
                quantity: quantity,
                bookIdNum: bookIdNum
            };
    
            fetch(`${booksdb}/${book_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify(bookData) 
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update book');
                }
                return response.json(); // Parse the response JSON
            })
            .then(data => {
                console.log('Book updated successfully:', data);
                // After successfully updating the book, fetch updated book data
                fetchBooksData();
            })
            .catch(error => {
                console.error('Error updating book:', error.message);
                // Handle error if needed
            });
        }
    
        // Call function to update the book
        updateBook(book_id, title, author, cover, price, category, quantity, bookIdNum);
    });

    // Function to fetch updated book data and refresh the table
async function fetchBooksData() {
        try {
            const response = await fetch(booksdb); 
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const updatedBooksData = await response.json();
            // Render updated table with new book data
            renderBooksTable(updatedBooksData);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    /*-------------DELETE BOOK------------*/

async function deleteBook(bookId) {
        try {
            const response = await fetch(`${booksdb}/${bookId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete book');
            }
            console.log('Book deleted successfully');
            // After successfully deleting the book, fetch updated book data and refresh the table
            fetchBooksData();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }
}







