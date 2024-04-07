class Book{
    constructor(title, author, cover, price, category) {
      this.title = title;
      this.author = author;
      this.cover = cover;
      this.price = price;
      this.category = category;
    }  
  }

const the_amazing_spiderman = new Book('The amazing Spider-Man', 'Stan Lee', 'assets/comics/comics1.jpg', '$20.000', 'cómics')
const iron_man = new Book('Iron Man', 'Stan Lee', 'assets/comics/comics2.jpg', '$10.000', 'cómics')
const king_spawn = new Book('King Spawn', 'Some Author', 'assets/comics/comics3.jpg', '$5.000', 'cómics')
const the_lord_of_the_rings = new Book('The Lord of the Rings', 'JRR Tolkien', 'assets/ficcion/ficcion1.jpg', '$20.000', 'ficción')
const harry_potter_atss = new Book('Harry Potter ATSS', 'JK Rowling', 'assets/ficcion/ficcion2.jpg', '$10.000', 'ficción')
const tc_the_hunt_for_red_october = new Book('The Hunt for Red October', 'Tom Clancy', 'assets/ficcion/ficcion3.webp', '$20.000', 'ficción')
const los_guemes = new Book('Los Guemes', 'Felipe Pigna', 'assets/historia/historia1.jpg', '$20.000', 'historia')
const historia_de_la_argentina_olvidada = new Book('Historia de la Argentina Olvidada', 'Ignacio Montes de Oca', 'assets/historia/historia2.webp', '$10.000', 'historia')
const los_emperadores_de_roma = new Book('Los emperadores de Roma', 'David Potter', 'assets/historia/historia3.jpg', '$20.000', 'historia')
const recetas_para_todos_los_dias = new Book('Recetas para todos los días', 'Guadalupe Fiñana', 'assets/recetas/recetas1.jpg', '$20.000', 'recetas')
const manual_de_cocina = new Book('Manual de Cocina', 'Ana María Herrera', 'assets/recetas/recetas2.jpg', '$30.000', 'recetas')
const cocina_cruda_para_principiantes = new Book('Cocina cruda para principiantes', 'Christine Bailey', 'assets/recetas/recetas3.jpg', '$20.000', 'recetas')

const displayBooks = [the_amazing_spiderman, 
    iron_man,
    king_spawn,
    the_lord_of_the_rings,
    harry_potter_atss,
    tc_the_hunt_for_red_october,
    los_guemes,
    historia_de_la_argentina_olvidada,
    los_emperadores_de_roma,
    recetas_para_todos_los_dias,
    manual_de_cocina,
    cocina_cruda_para_principiantes
    ]

    export { Book, displayBooks };