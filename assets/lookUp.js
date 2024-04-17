class Book{
  constructor(title, author, cover, price, category, quantity) {
    this.title = title;
    this.author = author;
    this.cover = cover;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
  }  
}






   //Ficción
  const el_gran_gatsby = new Book('El Gran Gatsby', 'F. Scott Fitzgerald', 'assets/ficcion/el-gran-gatsby.jpg', 1800, 'ficción', 15);
  const matar_un_ruisenor = new Book('Matar a un Ruiseñor', 'Harper Lee', 'assets/ficcion/matar-un-ruisenor.jpg', 1900, 'ficción', 12);
  const _1984 = new Book('1984', 'George Orwell', 'assets/ficcion/1984.jpg', 1700, 'ficción', 20);
  const orgullo_y_prejuicio = new Book('Orgullo y Prejuicio', 'Jane Austen', 'assets/ficcion/orgullo-y-prejuicio.jpg', 1600, 'ficción', 18);
  const guardian_en_el_centeno = new Book('El Guardián entre el Centeno', 'J.D. Salinger', 'assets/ficcion/guardian-en-el-centeno.jpg', 2000, 'ficción', 22);
  const el_hobbit = new Book('El Hobbit', 'J.R.R. Tolkien', 'assets/ficcion/el-hobbit.jpg', 2200, 'ficción', 25);
  const harry_potter_ylpf = new Book('Harry Potter y la Piedra Filosofal', 'J.K. Rowling', 'assets/ficcion/harry-potter-ylpf.jpg', 2500, 'ficción', 30);
  const el_senor_de_los_anillos = new Book('El Señor de los Anillos', 'J.R.R. Tolkien', 'assets/ficcion/el-senor-de-los-anillos.jpg', 2300, 'ficción', 28);
  const los_juegos_del_hambre = new Book('Los Juegos del Hambre', 'Suzanne Collins', 'assets/ficcion/los-juegos-del-hambre.jpg', 1900, 'ficción', 20);
  const el_codigo_da_vinci = new Book('El Código Da Vinci', 'Dan Brown', 'assets/ficcion/el-codigo-da-vinci.jpg', 2100, 'ficción', 25);
  const crespuculo = new Book('Crepúsculo', 'Stephenie Meyer', 'assets/ficcion/crepusculo.jpg', 2000, 'ficción', 18);
  const el_alquimista = new Book('El Alquimista', 'Paulo Coelho', 'assets/ficcion/el-alquimista.jpg', 2200, 'ficción', 23);
  const las_cronicas_de_narnia = new Book('Las Crónicas de Narnia', 'C.S. Lewis', 'assets/ficcion/las-cronicas-de-narnia.jpg', 2100, 'ficción', 27);
  const lo_que_el_viento_se_llevo = new Book('Lo que el Viento se Llevó', 'Margaret Mitchell', 'assets/ficcion/lo-que-el-viento-se-llevo.jpg', 2300, 'ficción', 24);
  const bajo_la_misma_estrella = new Book('Bajo la Misma Estrella', 'John Green', 'assets/ficcion/bajo-la-misma-estrella.jpg', 1800, 'ficción', 20);
  const las_aventuras_de_huckleberry_finn = new Book('Las Aventuras de Huckleberry Finn', 'Mark Twain', 'assets/ficcion/las-aventuras-de-huckleberry-finn.jpg', 1900, 'ficción', 15);
   //Historia
  const breve_historia_del_mundo = new Book('Breve Historia del Mundo', 'Ernst H. Gombrich', 'assets/historia/breve-historia-del-mundo.jpg', 2200, 'historia', 20);
  const de_animales_a_dioses = new Book('Sapiens De Animales a Dioses', 'Yuval Noah Harari', 'assets/historia/de-animales-a-dioses.jpg', 2500, 'historia', 18);
  const la_segunda_guerra_mundial = new Book('La Segunda Guerra Mundial', 'Antony Beevor', 'assets/historia/la-segunda-guerra-mundial.jpg', 2000, 'historia', 15);
  const el_diario_de_anne_frank = new Book('El Diario de Ana Frank', 'Ana Frank', 'assets/historia/diario-de-anne-frank.jpg', 2300, 'historia', 22);
  const la_historia_del_mundo_en_100_objetos = new Book('La Historia del Mundo en 100 Objetos', 'Neil MacGregor', 'assets/historia/la-historia-del-mundo-en-100-objetos.jpg', 2100, 'historia', 17);
  const breve_historia_de_espana = new Book('Breve Historia de España', 'Fernando García de Cortázar', 'assets/historia/breve-historia-de-espana.jpg', 2400, 'historia', 25);
  const los_mitos_griegos = new Book('Los Mitos Griegos', 'Robert Graves', 'assets/historia/los-mitos-griegos.jpg', 1900, 'historia', 20);
  const la_guerra_civil_espanola = new Book('La Guerra Civil Española', 'Hugh Thomas', 'assets/historia/la-guerra-civil-espanola.jpg', 1800, 'historia', 16);
  const el_holocausto = new Book('El Holocausto', 'Martin Gilbert', 'assets/historia/el-holocausto.jpg', 2100, 'historia', 19);
  const breve_historia_de_la_revolucion_rusa = new Book('Breve Historia de la Revolución Rusa', 'Richard Pipes', 'assets/historia/la-revolucion-rusa.jpg', 2300, 'historia', 21);
   //Comics
  const watchmen = new Book('Watchmen', 'Alan Moore', 'assets/comics/watchmen.jpg', 2200, 'cómics', 20);
  const maus = new Book('Maus', 'Art Spiegelman', 'assets/comics/maus.jpg', 2500, 'cómics', 18);
  const el_regreso_del_caballero_oscuro = new Book('Batman El Regreso del Caballero Oscuro', 'Frank Miller', 'assets/comics/el-regreso-del-caballero-oscuro.jpg', 2000, 'cómics', 15);
  const sandman = new Book('Sandman', 'Neil Gaiman', 'assets/comics/sandman.jpg', 2300, 'cómics', 22);
  const saga = new Book('Saga', 'Brian K. Vaughan', 'assets/comics/saga.jpg', 2100, 'cómics', 17);
  const y_el_ultimo_hombre = new Book('Y El Último Hombre', 'Brian K. Vaughan', 'assets/comics/y-el-ultimo-hombre.jpg', 2400, 'cómics', 25);
  const persepolis = new Book('Persépolis', 'Marjane Satrapi', 'assets/comics/persepolis.jpg', 1900, 'cómics', 20);
  const the_walking_dead = new Book('The Walking Dead', 'Robert Kirkman', 'assets/comics/the-walking-dead.jpg', 1800, 'cómics', 16);
  const pantera_negra = new Book('Pantera Negra', 'Ta-Nehisi Coates', 'assets/comics/pantera-negra.jpg', 2100, 'cómics', 19);
  const mantas = new Book('Mantas', 'Craig Thompson', 'assets/comics/mantas.jpg', 2300, 'cómics', 21);
   //Recetas
  const la_alegria_de_cocinar = new Book('La Alegría de Cocinar', 'Irma S. Rombauer', 'assets/recetas/la-alegria-de-cocinar.jpg', 2200, 'recetas', 20);
  const dominando_el_arte_de_la_cocina_francesa = new Book('Dominando el Arte de la Cocina Francesa', 'Julia Child', 'assets/recetas/el-arte-de-la-cocina-francesa.jpg', 2500, 'recetas', 18);
  const como_cocinar_todo = new Book('Cómo Cocinar Todo', 'Mark Bittman', 'assets/recetas/como-cocinar-todo.jpg', 2000, 'recetas', 15);
  const sal_grasa_acido_calor = new Book('Sal, Grasa, Ácido, Calor', 'Samin Nosrat', 'assets/recetas/sal-grasa-acido-calor.jpg', 2300, 'recetas', 22);
  const plenty = new Book('Plenty', 'Yotam Ottolenghi', 'assets/recetas/plenty.jpg', 2100, 'recetas', 17);
  const la_cuchara_de_plata = new Book('La Cuchara de Plata', 'Varios Autores', 'assets/recetas/la-cuchara-de-plata.jpg', 2400, 'recetas', 25);
  const esenciales_de_la_cocina_italiana = new Book('Esenciales de la Cocina Italiana', 'Marcella Hazan', 'assets/recetas/esenciales-de-la-comida-italiana.jpg', 1900, 'recetas', 20);
  const jerusalen = new Book('Jerusalén', 'Yotam Ottolenghi', 'assets/recetas/jerusalen.jpg', 1800, 'recetas', 16);
  const el_libro_del_sabor = new Book('El Libro del Sabor', 'Karen Page', 'assets/recetas/el-libro-del-sabor.jpg', 2100, 'recetas', 19);
  const cocina_vegetariana_para_todos = new Book('Cocina Vegetariana para Todos', 'Deborah Madison', 'assets/recetas/cocina-vegetariana-para-todos.jpg', 2300, 'recetas', 21);



const displayBooks = [
el_gran_gatsby,
matar_un_ruisenor,
_1984,
orgullo_y_prejuicio,
guardian_en_el_centeno, 
el_hobbit,
harry_potter_ylpf,
el_senor_de_los_anillos,
los_juegos_del_hambre,
el_codigo_da_vinci,
crespuculo,
el_alquimista,
las_cronicas_de_narnia, 
lo_que_el_viento_se_llevo,
bajo_la_misma_estrella,
las_aventuras_de_huckleberry_finn,
breve_historia_del_mundo,
de_animales_a_dioses,
la_segunda_guerra_mundial,
el_diario_de_anne_frank,
la_historia_del_mundo_en_100_objetos,
breve_historia_de_espana,
los_mitos_griegos,
la_guerra_civil_espanola,
el_holocausto,
breve_historia_de_la_revolucion_rusa,
watchmen,
maus,
el_regreso_del_caballero_oscuro,
sandman,
saga,
y_el_ultimo_hombre,
persepolis,
the_walking_dead,
pantera_negra,
mantas,
la_alegria_de_cocinar,
dominando_el_arte_de_la_cocina_francesa,
como_cocinar_todo,
sal_grasa_acido_calor,
plenty,
la_cuchara_de_plata,
esenciales_de_la_cocina_italiana,
jerusalen,
el_libro_del_sabor,
cocina_vegetariana_para_todos 
  ]

  export { Book, displayBooks };