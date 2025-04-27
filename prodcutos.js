// ===================================================
// DATOS DE EJEMPLO DE PRODUCTOS (REEMPLAZA CON LOS TUYOS)
// Actualizados con productos de Conos y Canastas de la imagen
// ===================================================
// Este objeto contiene la lista de productos para cada categoría.
// Las claves (ej: "conos") deben coincidir con los valores del atributo data-category en el HTML.
const allProducts = {
    "conos": [
        // Asegúrate de que estas rutas sean correctas según la ubicación de tus imágenes
        { name: "1 porción de helado", price: "$4.500", image: "helado_sencillo.png", description: "Elige tu sabor favorito en nuestro cono crujiente." },
        { name: "2 porciones de helado", price: "$8.500", image: "helado_doble.png", description: "Combina dos sabores en un solo cono." },
        { name: "Canasta con 3 porciones", price: "$12.000", image: "canasta_3porciones.png", description: "Tres porciones de helado en canasta de galleta, con salsa, fresa y barquillo." },
        // Opcional: Añadir porciones adicionales como items separados si aplica en el modal
        { name: "Porción Adicional de Helado", price: "$4.200", image: "img/prod/porcion_helado_extra.png", description: "Añade una porción extra de tu sabor preferido." },
        { name: "Adicional de Queso", price: "$4.500", image: "img/prod/adicional_queso.png", description: "Agrega queso a tu postre." },

        // Añade más productos de Conos y Canastas aquí si tienes
    ],
    "frutas": [
        { name: "Ensalada de Frutas Clásica", price: "$5.000", image: "img/prod/ensalada_clasica.png", description: "Selección de frutas frescas de temporada." },
        { name: "Ensalada de Frutas con Helado", price: "$6.500", image: "img/prod/ensalada_helado.png", description: "Nuestra ensalada clásica con una bola de helado a elegir." },
        { name: "Canasta Frutal Especial", price: "$7.000", image: "img/prod/canasta_frutal.png", description: "Combinación de frutas, helado, crema batida y sirope." },
        // Añade más productos de Frutas y Más aquí
    ],
     "copas": [
        { name: "Copa Melba", price: "$7.500", image: "img/prod/copa_melba.png", description: "Clásico postre con melocotones, helado de vainilla y sirope de frambuesa." },
        { name: "Copa Brownie Temptation", price: "$8.000", image: "img/prod/copa_brownie.png", description: "Brownie tibio, helado de chocolate, sirope y nueces." },
        // Añade más productos de Copas aquí
    ],
     "malteadas": [
        { name: "Malteada de Chocolate", price: "$5.500", image: "img/prod/malteada_chocolate.png", description: "Deliciosa malteada con helado de chocolate." },
        { name: "Malteada de Fresa", price: "$5.500", image: "img/prod/malteada_fresa.png", description: "Batido cremoso con helado de fresa natural." },
         // Añade más productos de Malteadas aquí
    ],
      "kids": [
        { name: "Mini Cono Divertido", price: "$2.000", image: "img/prod/mini_cono.png", description: "Cono pequeño con helado y chispas de colores." },
        { name: "Helado con Gomitas", price: "$3.500", image: "img/prod/helado_gomitas.png", description: "Una bola de helado con un topping divertido de gomitas." },
        // Añade más productos de Kids aquí
    ],
    // Añade más categorías y sus productos aquí
};

// ===================================================
// LÓGICA PARA EL MODAL
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el modal y los elementos donde pondremos el título y la lista de productos
    const productsModal = document.getElementById('productsModal');
    const modalTitle = productsModal.querySelector('.modal-title');
    const productListContainer = document.getElementById('product-list-container');

    // Añadir un 'listener' al modal para saber cuándo se va a mostrar
    productsModal.addEventListener('show.bs.modal', event => {
        // Botón (enlace con flecha) que activó el modal
        const button = event.relatedTarget;

        // Obtener la categoría desde el atributo data-category
        const category = button.getAttribute('data-category');

        // Obtener el título de la categoría desde el H2 dentro de la tarjeta padre
        const card = button.closest('.category-card'); // Encuentra la tarjeta padre
        const categoryTitle = card.querySelector('h2').textContent;

        // Actualizar el título del modal
        modalTitle.textContent = categoryTitle; // Usa el texto del H2 de la tarjeta

        // Obtener la lista de productos para la categoría seleccionada
        const products = allProducts[category];

        // Limpiar el contenedor de productos actual
        productListContainer.innerHTML = '';

        // Si hay productos para esta categoría, crearlos y añadirlos al modal
        if (products && products.length > 0) {
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item'); // Usamos la clase CSS que definimos

                // Incluir un contenedor adicional para la imagen para el fondo creativo
                productItem.innerHTML = `
                    <div class="product-image-container">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h6>${product.name}</h6>
                        <p>${product.description}</p>
                        <span class="price">${product.price}</span>
                    </div>
                `;
                productListContainer.appendChild(productItem);
            });
        } else {
            // Mostrar un mensaje si no hay productos en esta categoría
            productListContainer.innerHTML = '<p>No hay productos disponibles en esta categoría por el momento.</p>';
        }
    });
});