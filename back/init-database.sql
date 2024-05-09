-- Create the bookstore database
CREATE DATABASE IF NOT EXISTS book_store;

-- Use the bookstore database
USE book_store;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    address VARCHAR(255) -- Add the address column
);

-- Insert the first user with the role of 'admin'
INSERT INTO users (username, email, password, role, address) VALUES ('admin', 'admin@example.com', 'adminpassword', 'admin', '123 Admin Street');

-- Create the orders table
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create the order_items table
CREATE TABLE IF NOT EXISTS order_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    book_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

-- Create the books table
CREATE TABLE IF NOT EXISTS books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    cover VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

-- Create the favorite_items table
CREATE TABLE IF NOT EXISTS favorite_items (
    favorite_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    book_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

-- Insert data into the books table
INSERT INTO books (title, author, cover, price, category, quantity) VALUES 
('El Gran Gatsby', 'F. Scott Fitzgerald', 'front/assets/ficcion/el-gran-gatsby.jpg', '1800', 'ficci n', '15'),
('Matar a un Ruise or', 'Harper Lee', 'front/assets/ficcion/matar-un-ruisenor.jpg', '1900', 'ficci n', '12'),
('1984', 'George Orwell', 'front/assets/ficcion/1984.jpg', '1700', 'ficci n', '20'),
('Orgullo y Prejuicio', 'Jane Austen', 'front/assets/ficcion/orgullo-y-prejuicio.jpg', '1600', 'ficci n', '18'),
('El Guardi n entre el Centeno', 'J.D. Salinger', 'front/assets/ficcion/guardian-en-el-centeno.jpg', '2000', 'ficci n', '22'),
('El Hobbit', 'J.R.R. Tolkien', 'front/assets/ficcion/el-hobbit.jpg', '2200', 'ficci n', '25'),
('Harry Potter y la Piedra Filosofal', 'J.K. Rowling', 'front/assets/ficcion/harry-potter-ylpf.jpg', '2500', 'ficci n', '30'),
('El Se or de los Anillos', 'J.R.R. Tolkien', 'front/assets/ficcion/el-senor-de-los-anillos.jpg', '2300', 'ficci n', '28'),
('Los Juegos del Hambre', 'Suzanne Collins', 'front/assets/ficcion/los-juegos-del-hambre.jpg', '1900', 'ficci n', '20'),
('El C digo Da Vinci', 'Dan Brown', 'front/assets/ficcion/el-codigo-da-vinci.jpg', '2100', 'ficci n', '25'),
('Crep sculo', 'Stephenie Meyer', 'front/assets/ficcion/crepusculo.jpg', '2000', 'ficci n', '18'),
('El Alquimista', 'Paulo Coelho', 'front/assets/ficcion/el-alquimista.jpg', '2200', 'ficci n', '23'),
('Las Cr nicas de Narnia', 'C.S. Lewis', 'front/assets/ficcion/las-cronicas-de-narnia.jpg', '2100', 'ficci n', '27'),
('Lo que el Viento se Llev ', 'Margaret Mitchell', 'front/assets/ficcion/lo-que-el-viento-se-llevo.jpg', '2300', 'ficci n', '24'),
('Bajo la Misma Estrella', 'John Green', 'front/assets/ficcion/bajo-la-misma-estrella.jpg', '1800', 'ficci n', '20'),
('Las Aventuras de Huckleberry Finn', 'Mark Twain', 'front/assets/ficcion/las-aventuras-de-huckleberry-finn.jpg', '1900', 'ficci n', '15'),
('Breve Historia del Mundo', 'Ernst H. Gombrich', 'front/assets/historia/breve-historia-del-mundo.jpg', '2200', 'historia', '20'),
('Sapiens De Animales a Dioses', 'Yuval Noah Harari', 'front/assets/historia/de-animales-a-dioses.jpg', '2500', 'historia', '18'),
('La Segunda Guerra Mundial', 'Antony Beevor', 'front/assets/historia/la-segunda-guerra-mundial.jpg', '2000', 'historia', '15'),
('El Diario de Ana Frank', 'Ana Frank', 'front/assets/historia/diario-de-anne-frank.jpg', '2300', 'historia', '22'),
('La Historia del Mundo en 100 Objetos', 'Neil MacGregor', 'front/assets/historia/la-historia-del-mundo-en-100-objetos.jpg', '2100', 'historia', '17'),
('Breve Historia de Espa a', 'Fernando Garc a de Cort zar', 'front/assets/historia/breve-historia-de-espana.jpg', '2400', 'historia', '25'),
('Los Mitos Griegos', 'Robert Graves', 'front/assets/historia/los-mitos-griegos.jpg', '1900', 'historia', '20'),
('La Guerra Civil Espa ola', 'Hugh Thomas', 'front/assets/historia/la-guerra-civil-espanola.jpg', '1800', 'historia', '16'),
('El Holocausto', 'Martin Gilbert', 'front/assets/historia/el-holocausto.jpg', '2100', 'historia', '19'),
('Breve Historia de la Revoluci n Rusa', 'Richard Pipes', 'front/assets/historia/la-revolucion-rusa.jpg', '2300', 'historia', '21'),
('Watchmen', 'Alan Moore', 'front/assets/c mics/watchmen.jpg', '2200', 'c mics', '20'),
('Maus', 'Art Spiegelman', 'front/assets/c mics/maus.jpg', '2500', 'c mics', '18'),
('Batman El Regreso del Caballero Oscuro', 'Frank Miller', 'front/assets/c mics/el-regreso-del-caballero-oscuro.jpg', '2000', 'c mics', '15'),
('Sandman', 'Neil Gaiman', 'front/assets/c mics/sandman.jpg', '2300', 'c mics', '22'),
('Saga', 'Brian K. Vaughan', 'front/assets/c mics/saga.jpg', '2100', 'c mics', '17'),
('Y El  ltimo Hombre', 'Brian K. Vaughan', 'front/assets/c mics/y-el-ultimo-hombre.jpg', '2400', 'c mics', '25'),
('Pers polis', 'Marjane Satrapi', 'front/assets/c mics/persepolis.jpg', '1900', 'c mics', '20'),
('The Walking Dead', 'Robert Kirkman', 'front/assets/c mics/the-walking-dead.jpg', '1800', 'c mics', '16'),
('Pantera Negra', 'Ta-Nehisi Coates', 'front/assets/c mics/pantera-negra.jpg', '2100', 'c mics', '19'),
('Mantas', 'Craig Thompson', 'front/assets/c mics/mantas.jpg', '2300', 'c mics', '21'),
('La Alegr a de Cocinar', 'Irma S. Rombauer', 'front/assets/recetas/la-alegria-de-cocinar.jpg', '2200', 'recetas', '20'),
('Dominando el Arte de la Cocina Francesa', 'Julia Child', 'front/assets/recetas/el-arte-de-la-cocina-francesa.jpg', '2500', 'recetas', '18'),
('C mo Cocinar Todo', 'Mark Bittman', 'front/assets/recetas/como-cocinar-todo.jpg', '2000', 'recetas', '15'),
('Sal, Grasa,  cido, Calor', 'Samin Nosrat', 'front/assets/recetas/sal-grasa-acido-calor.jpg', '2300', 'recetas', '22'),
('Plenty', 'Yotam Ottolenghi', 'front/assets/recetas/plenty.jpg', '2100', 'recetas', '17'),
('La Cuchara de Plata', 'Varios Autores', 'front/assets/recetas/la-cuchara-de-plata.jpg', '2400', 'recetas', '25'),
('Esenciales de la Cocina Italiana', 'Marcella Hazan', 'front/assets/recetas/esenciales-de-la-comida-italiana.jpg', '1900', 'recetas', '20'),
('Jerusal n', 'Yotam Ottolenghi', 'front/assets/recetas/jerusalen.jpg', '1800', 'recetas', '16'),
('El Libro del Sabor', 'Karen Page', 'front/assets/recetas/el-libro-del-sabor.jpg', '2100', 'recetas', '19'),
('Cocina Vegetariana para Todos', 'Deborah Madison', 'front/assets/recetas/cocina-vegetariana-para-todos.jpg', '2300', 'recetas', '21');
