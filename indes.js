// Importar readline para el menú interactivo



const clasicos =[

  { titulo: "El Señor de los Anillos: La Comunidad del Anillo", autor: "J.R.R. Tolkien", genero: "Fantasía épica", idioma: "Español", precio: 25.99, formato: "Tapa blanda", isbn: "978-84-450-7160-9", descripcion: "Primera parte de la trilogía que narra la aventura de un grupo para destruir el Anillo Único.", estado: "Nuevo", ubicacion: "Estantería A1", fecha_publicacion: "1954-07-29", editorial: "Minotauro", paginas: 423, dimensiones: "15 x 3 x 22 cm", peso: "0.5 kg" },
  { titulo: "1984", autor: "George Orwell", genero: "Distopía", idioma: "Español", precio: 15.00, formato: "Tapa blanda", isbn: "978-84-339-7987-7", descripcion: "Novela que describe un futuro totalitario y vigilado por el Gran Hermano.", estado: "Nuevo", ubicacion: "Estantería B2", fecha_publicacion: "1949-06-08", editorial: "Seix Barral", paginas: 328, dimensiones: "14 x 2.5 x 21 cm", peso: "0.4 kg" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", idioma: "Español", precio: 20.00, formato: "Tapa blanda", isbn: "978-84-376-0494-7", descripcion: "Saga familiar de los Buendía en el pueblo ficticio de Macondo.", estado: "Nuevo", ubicacion: "Estantería C3", fecha_publicacion: "1967-05-30", editorial: "Editorial Sudamericana", paginas: 417, dimensiones: "15 x 2 x 23 cm", peso: "0.45 kg" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela clásica", idioma: "Español", precio: 18.50, formato: "Tapa dura", isbn: "978-84-376-0494-8", descripcion: "Las aventuras del ingenioso hidalgo Don Quijote y su escudero Sancho Panza.", estado: "Nuevo", ubicacion: "Estantería D4", fecha_publicacion: "1605-01-16", editorial: "Francisco de Robles", paginas: 863, dimensiones: "16 x 4 x 24 cm", peso: "0.9 kg" },
  { titulo: "Los miserables", autor: "Victor Hugo", genero: "Novela", idioma: "Español", precio: 22.50, formato: "Tapa dura", isbn: "978-84-376-0494-8", descripcion: "Novela histórica que narra la vida de varios personajes en la Francia del siglo XIX.", estado: "Nuevo", ubicacion: "Estantería 3", fecha_publicacion: "1862-01-01", editorial: "A. Lacroix, Verboeckhoven & Cie", paginas: 1488, dimensiones: "15 x 23 cm", peso: "1.2 kg" },
{ titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "Novela romántica", idioma: "Español", precio: 18.99, formato: "Tapa blanda", isbn: "978-84-376-0495-5", descripcion: "Una historia de amor y orgullo entre Elizabeth Bennet y Mr. Darcy.", estado: "Nuevo", ubicacion: "Estantería A2", fecha_publicacion: "1813-01-28", editorial: "Penguin Clásicos", paginas: 416, dimensiones: "13 x 2.5 x 20 cm", peso: "0.45 kg" },
{ titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", genero: "Novela psicológica", idioma: "Español", precio: 21.50, formato: "Tapa dura", isbn: "978-84-376-0495-6", descripcion: "Un joven estudiante comete un asesinato y enfrenta el peso de su conciencia.", estado: "Nuevo", ubicacion: "Estantería A3", fecha_publicacion: "1866-01-01", editorial: "Alianza Editorial", paginas: 688, dimensiones: "14 x 3.5 x 21 cm", peso: "0.6 kg" }
];

function Obtenerclasicos(){

    return clasicos
}

const cienciaFiccionYFantasia = [
  { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", genero: "Fantasía", idioma: "Español", precio: 19.99, formato: "Tapa dura", isbn: "978-84-9838-519-0", descripcion: "Primer libro de la saga de Harry Potter, donde descubre su origen mágico y asiste a Hogwarts.", estado: "Nuevo", ubicacion: "Estantería F1", fecha_publicacion: "1997-06-26", editorial: "Salamandra", paginas: 256, dimensiones: "14 x 3 x 21 cm", peso: "0.6 kg" },

  { titulo: "El Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasía", idioma: "Español", precio: 17.50, formato: "Tapa blanda", isbn: "978-84-450-7295-8", descripcion: "Aventura de Bilbo Bolsón en su viaje con enanos hacia la Montaña Solitaria.", estado: "Nuevo", ubicacion: "Estantería F2", fecha_publicacion: "1937-09-21", editorial: "Minotauro", paginas: 320, dimensiones: "13 x 2.5 x 20 cm", peso: "0.4 kg" },

  { titulo: "El nombre del viento", autor: "Patrick Rothfuss", genero: "Fantasía épica", idioma: "Español", precio: 24.95, formato: "Tapa blanda", isbn: "978-84-450-7752-6", descripcion: "Crónica de la vida de Kvothe, músico, mago y héroe legendario.", estado: "Nuevo", ubicacion: "Estantería F3", fecha_publicacion: "2007-03-27", editorial: "Plaza & Janés", paginas: 880, dimensiones: "15 x 4.5 x 23 cm", peso: "0.9 kg" },

  { titulo: "Los juegos del hambre", autor: "Suzanne Collins", genero: "Ciencia ficción", idioma: "Español", precio: 18.00, formato: "Tapa blanda", isbn: "978-84-675-3608-1", descripcion: "Katniss Everdeen participa en una lucha mortal televisada en un futuro distópico.", estado: "Nuevo", ubicacion: "Estantería F4", fecha_publicacion: "2008-09-14", editorial: "RBA Molino", paginas: 400, dimensiones: "14 x 2.8 x 21 cm", peso: "0.5 kg" },

  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "Ciencia ficción", idioma: "Español", precio: 14.95, formato: "Tapa blanda", isbn: "978-84-376-0494-6", descripcion: "En un futuro donde los libros están prohibidos, un bombero comienza a cuestionar su labor.", estado: "Nuevo", ubicacion: "Estantería F5", fecha_publicacion: "1953-10-19", editorial: "Minotauro", paginas: 256, dimensiones: "13 x 1.8 x 20 cm", peso: "0.35 kg" },

  { titulo: "Dune", autor: "Frank Herbert", genero: "Ciencia ficción", idioma: "Español", precio: 24.99, formato: "Tapa blanda", isbn: "978-84-450-7398-6", descripcion: "La historia del joven Paul Atreides en el planeta desértico Arrakis.", estado: "Nuevo", ubicacion: "Estantería F6", fecha_publicacion: "1965-08-01", editorial: "Minotauro", paginas: 672, dimensiones: "15 x 4 x 23 cm", peso: "0.8 kg" },

  { titulo: "La rueda del tiempo: El ojo del mundo", autor: "Robert Jordan", genero: "Fantasía épica", idioma: "Español", precio: 23.50, formato: "Tapa blanda", isbn: "978-84-450-7333-7", descripcion: "Un joven granjero se ve envuelto en una lucha ancestral entre el bien y el mal.", estado: "Nuevo", ubicacion: "Estantería F7", fecha_publicacion: "1990-01-15", editorial: "Minotauro", paginas: 800, dimensiones: "15 x 4.5 x 23 cm", peso: "0.9 kg" },

];

function obtenerCienciaFiccionYFantasia() {
  return cienciaFiccionYFantasia;
}

const literaturaContemporanea = [
  { titulo: "El código Da Vinci", autor: "Dan Brown", genero: "Thriller / Misterio", idioma: "Español", precio: 21.50, formato: "Tapa blanda", isbn: "978-84-666-0566-4", descripcion: "Un simbologista y una criptóloga descubren un secreto milenario oculto en obras de arte y religión.", estado: "Nuevo", ubicacion: "Estantería G1", fecha_publicacion: "2003-03-18", editorial: "Planeta", paginas: 624, dimensiones: "15 x 3.5 x 23 cm", peso: "0.7 kg" },

  { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", genero: "Misterio / Drama", idioma: "Español", precio: 22.00, formato: "Tapa dura", isbn: "978-84-08-06785-1", descripcion: "Un joven descubre un libro olvidado en el Cementerio de los Libros Olvidados y desvela secretos oscuros.", estado: "Nuevo", ubicacion: "Estantería G2", fecha_publicacion: "2001-04-12", editorial: "Planeta", paginas: 576, dimensiones: "15 x 3.8 x 24 cm", peso: "0.75 kg" },

  { titulo: "El alquimista", autor: "Paulo Coelho", genero: "Ficción / Desarrollo personal", idioma: "Español", precio: 16.00, formato: "Tapa blanda", isbn: "978-84-08-03747-2", descripcion: "Santiago, un joven pastor, emprende un viaje para encontrar su leyenda personal y un tesoro.", estado: "Nuevo", ubicacion: "Estantería G3", fecha_publicacion: "1988-05-01", editorial: "Planeta", paginas: 192, dimensiones: "13 x 1.5 x 20 cm", peso: "0.3 kg" },

  { titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", genero: "Novela gótica / Filosófica", idioma: "Español", precio: 14.00, formato: "Tapa blanda", isbn: "978-84-376-2336-7", descripcion: "Dorian Gray mantiene su juventud intacta mientras su retrato envejece, reflejando sus actos corruptos.", estado: "Nuevo", ubicacion: "Estantería G4", fecha_publicacion: "1890-06-20", editorial: "Edhasa", paginas: 272, dimensiones: "14 x 2 x 21 cm", peso: "0.4 kg" },

  { titulo: "La chica del tren", autor: "Paula Hawkins", genero: "Thriller psicológico", idioma: "Español", precio: 19.95, formato: "Tapa blanda", isbn: "978-84-9062-688-8", descripcion: "Una mujer se ve envuelta en un misterio mientras viaja diariamente en tren.", estado: "Nuevo", ubicacion: "Estantería G4", fecha_publicacion: "2015-01-13", editorial: "Planeta", paginas: 496, dimensiones: "14 x 2.8 x 21 cm", peso: "0.5 kg" },

  { titulo: "Cometas en el cielo", autor: "Khaled Hosseini", genero: "Drama", idioma: "Español", precio: 18.75, formato: "Tapa blanda", isbn: "978-84-9838-199-4", descripcion: "Una historia de amistad, culpa y redención en Afganistán.", estado: "Nuevo", ubicacion: "Estantería G5", fecha_publicacion: "2003-05-29", editorial: "Salamandra", paginas: 384, dimensiones: "13 x 2.2 x 20 cm", peso: "0.45 kg" }
];
const librosAdicionales =[
 { titulo: "1984", autor: "George Orwell", genero: "Distopía", idioma: "Español", precio: 18.50, formato: "Tapa blanda", isbn: "978-84-376-0494-1", descripcion: "Una sociedad vigilada por un gobierno totalitario.", estado: "Nuevo", ubicacion: "Estante A1", fecha_publicacion: "1949-06-08", editorial: "Debolsillo", paginas: 328, dimensiones: "12 x 19 cm", peso: "0.4 kg" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", idioma: "Español", precio: 22.90, formato: "Tapa dura", isbn: "978-84-376-0494-2", descripcion: "La saga de la familia Buendía en Macondo.", estado: "Nuevo", ubicacion: "Estante B2", fecha_publicacion: "1967-05-30", editorial: "Sudamericana", paginas: 471, dimensiones: "14 x 21 cm", peso: "0.5 kg" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela", idioma: "Español", precio: 25.00, formato: "Tapa dura", isbn: "978-84-376-0494-3", descripcion: "Un caballero loco recorre España con su escudero Sancho.", estado: "Nuevo", ubicacion: "Estante C1", fecha_publicacion: "1605-01-16", editorial: "Castalia", paginas: 863, dimensiones: "15 x 23 cm", peso: "0.8 kg" },
  { titulo: "El Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasía", idioma: "Español", precio: 19.99, formato: "Tapa blanda", isbn: "978-84-376-0494-4", descripcion: "La aventura de Bilbo Bolsón hacia la Montaña Solitaria.", estado: "Nuevo", ubicacion: "Estante F1", fecha_publicacion: "1937-09-21", editorial: "Minotauro", paginas: 310, dimensiones: "13 x 20 cm", peso: "0.42 kg" },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "Ciencia ficción", idioma: "Español", precio: 17.80, formato: "Tapa blanda", isbn: "978-84-376-0494-5", descripcion: "Bomberos que queman libros en una sociedad sin pensamiento libre.", estado: "Nuevo", ubicacion: "Estante F2", fecha_publicacion: "1953-10-19", editorial: "Minotauro", paginas: 224, dimensiones: "12.5 x 19.5 cm", peso: "0.36 kg" },
  { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", genero: "Misterio", idioma: "Español", precio: 21.60, formato: "Tapa dura", isbn: "978-84-376-0494-6", descripcion: "Un joven encuentra un libro olvidado que lo cambia todo.", estado: "Nuevo", ubicacion: "Estante G1", fecha_publicacion: "2001-04-12", editorial: "Planeta", paginas: 576, dimensiones: "15 x 23 cm", peso: "0.6 kg" },
  { titulo: "El código Da Vinci", autor: "Dan Brown", genero: "Thriller", idioma: "Español", precio: 20.40, formato: "Tapa dura", isbn: "978-84-376-0494-7", descripcion: "Un misterio histórico lleno de símbolos y persecuciones.", estado: "Nuevo", ubicacion: "Estante G2", fecha_publicacion: "2003-03-18", editorial: "Umbriel", paginas: 528, dimensiones: "15 x 22 cm", peso: "0.58 kg" },
  { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", genero: "Fantasía", idioma: "Español", precio: 24.99, formato: "Tapa dura", isbn: "978-84-376-0494-8", descripcion: "El inicio del joven mago en Hogwarts.", estado: "Nuevo", ubicacion: "Estante F3", fecha_publicacion: "1997-06-26", editorial: "Salamandra", paginas: 256, dimensiones: "14 x 21 cm", peso: "0.48 kg" },
  { titulo: "El nombre del viento", autor: "Patrick Rothfuss", genero: "Fantasía épica", idioma: "Español", precio: 23.95, formato: "Tapa blanda", isbn: "978-84-376-0494-9", descripcion: "Kvothe narra su propia historia desde niño hasta convertirse en leyenda.", estado: "Nuevo", ubicacion: "Estante F4", fecha_publicacion: "2007-03-27", editorial: "Plaza & Janés", paginas: 880, dimensiones: "15 x 23 cm", peso: "0.9 kg" },
  { titulo: "El alquimista", autor: "Paulo Coelho", genero: "Ficción espiritual", idioma: "Español", precio: 16.75, formato: "Tapa blanda", isbn: "978-84-376-0495-0", descripcion: "Un joven pastor busca su leyenda personal en el desierto.", estado: "Nuevo", ubicacion: "Estante G3", fecha_publicacion: "1988-04-15", editorial: "Planeta", paginas: 192, dimensiones: "12 x 19 cm", peso: "0.3 kg" }
];



function obtenerLiteraturaContemporanea() {
  return literaturaContemporanea;
}
const readline = require("readline");

let libros = [...clasicos, ...cienciaFiccionYFantasia, ...literaturaContemporanea];
let libros2 =[...librosAdicionales];
let PilLalibros =[...libros]

const precioTotal = libros.reduce((acum, libros) => acum + libros.precio, 0);
const precioPromedio = libros.reduce((a, b) => a + b.precio, 0) / libros.length;

 const rl = readline.createInterface({
        input: process.stdin,    // Entrada estándar (teclado)
        output: process.stdout   // Salida estándar (consola)
    });

    // ... resto del código


function iniciarMenu(){

    console.log("====MENU LIBROS====");
    console.log("1. Mostrar pila actual de libros");
    console.log("2. Agregar 10 libros adicionales");
    console.log("3. quitar 5 libros de la pila");
    console.log("4. Mostrar estadisticas");
    console.log("5. Reinicializar con 20 libros");
    console.log("6. Salir del programa");
    


 rl.question("\nSeleccione una opción (1-6): ", (opcion) => {
    switch (opcion) {
      case "1":
        console.table(PilLalibros);
    break;
      case "2":
        PilLalibros.push(...librosAdicionales)
          console.log("✅ Se agregaron 10 libros a la pila.");
        break;
      case "3":
        if (PilLalibros.length < 5) {
          console.log("⚠️ No hay suficientes libros para quitar 5.");
        } else {
          PilLalibros.splice(-5, 5); // Quita los últimos 5
          console.log("✅ Se eliminaron 5 libros de la pila.");
        }
        break;
      case "4":
        console.log(`Total de libros en la pila: ${libros.length}\n`);
console.log("Clásicos:", clasicos.length);
console.log("Ciencia ficción y fantasía:", cienciaFiccionYFantasia.length);
console.log("Literatura contemporánea:", literaturaContemporanea.length);
console.log("Precio total de la colección:", precioTotal.toFixed(2));
console.log("Precio total de la colección:", precioPromedio.toFixed(2));
         break;
      
      case "5":
        PilLalibros = [...clasicos, ...cienciaFiccionYFantasia, ...literaturaContemporanea];
        console.log("🔄 La pila fue reinicializada a los 20 libros originales.");
        break;
      case "6":
        console.log("👋 Programa finalizado.");
        rl.close();
        return;

      default:
        console.log("❌ Opción inválida.");
        break;

    
    }

        setTimeout(iniciarMenu, 1000);
  });

}
iniciarMenu();


        
      

    
    
