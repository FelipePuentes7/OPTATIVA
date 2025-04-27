// ===================================================
// DATOS DE PRODUCTOS ACTUALIZADOS
// ===================================================
const allProducts = {
    "conos": [
        { 
            name: "1 porción de helado", 
            price: "$4.500", 
            image: "img/helado_sencillo.png", 
            description: "Elige tu sabor favorito en nuestro cono crujiente."
        },
        { 
            name: "2 porciones de helado", 
            price: "$8.500", 
            image: "img/helado_doble.png", 
            description: "Combina dos sabores en un solo cono."
        },
        { 
            name: "3 porciones de helado", 
            price: "$12.000", 
            image: "img/canasta_3.png", 
            description: "Tres porciones de helado para disfrutar en compañía."
        },
        { 
            name: "Porción adicional de helado", 
            price: "$4.200", 
            image: "img/porcion.png", 
            description: "Añade una porción extra a tu pedido."
        },
        { 
            name: "Adicional de queso", 
            price: "$4.500", 
            image: "img/queso.png", 
            description: "Agrega queso a tu helado."
        }
    ],
    "frutas": [
    { 
        name: "Ensalada pequeña", 
        price: "$14.000", 
        image: "img/ensalada1.png", 
        description: "Una porción de helado, papaya, melón, banano, manzana, fresa, uva, kiwi, durazno,crema de leche, queso y leche condensada."
    },
    { 
        name: "Ensalada mediana", 
        price: "$17.000", 
        image: "img/ensalada2.png", 
        description: "Dos porciones de helado, papaya, melón, banano, manzana, fresa, uva, kiwi, durazno, crema de leche, queso y leche condensada."
    },
    { 
        name: "Ensalada especial", 
        price: "$21.000", 
        image: "img/ensalada3.png", 
        description: "Tres porciones de helado encanasta de galleta, papaya, melón, banano, manzana, fresa, uva, kiwi, durazno,crema de leche, queso y leche condensada."
    },
    ],
    "canastas": [
        { 
            name: "Banana Split", 
            price: "$17.000", 
            image: "img/canasta1.png", 
            description: "Tres porciones de helado en canasta de galleta, banano, queso, fresa, chantillí, leche condensada y salsa."
        },
        { 
            name: "Canasta carnaval", 
            price: "$17.000", 
            image: "img/canasta2.png", 
            description: "Tres porciones de helado, banano, fresas, durazno,  crema chantillí, galleta, salsas, grajeas, chips de chocolate."
        }
    ],
    "copas": [
        { 
            name: "Copa de durazno", 
            price: "$12.000", 
            image: "img/copa1.png", 
            description: "Dos porciones de helado, durazno, crema chantillÍ, barquillo, fresa."
        },
        { 
            name: "Copa de fresas", 
            price: "$12.000", 
            image: "img/copa2.png", 
            description: "Dos porciones de helado, fresas, leche condensada, chantillí, barquillo."
        },
        { 
            name: "Copa de oreo", 
            price: "$12.000", 
            image: "img/copa3.png", 
            description: "Dos porciones de helado, chantillí, galletas oreo, barquillo, fresa."
        },
        { 
            name: "Antojo de queso", 
            price: "$12.500", 
            image: "img/copa4.png", 
            description: "Dos porciones de helado, queso, chantillí, leche condensada, fresa."
        }
    ],
    "malteadas": [
        { 
            name: "Malteada unicornio", 
            price: "$15.000", 
            image: "img/malteada1.png", 
            description: "Helado de fresa, crema chantillí, gomitas, masmelos, grajeas"
        },
        { 
            name: "Malteada de capuchino", 
            price: "$15.000", 
            image: "img/malteada2.png", 
            description: "Helado de capuchino, trozos de brownie, chantillí, salsa de chocolate, fresa."
        },
        { 
            name: "Malteada de oreo", 
            price: "$15.000", 
            image: "img/malteada3.png", 
            description: "Helado de oreo, crema chantillí, trozos de galleta oreo, salsa chocolate, barquillo."
        }
    ],
    "kids": [
        { 
            name: " Mickey Mouse", 
            price: "$8.000", 
            image: "img/kids_portada.png", 
            description: "Una porción de helado en canasta de galleta, galleta oreo y barquillo."
        },
        { 
            name: "Payasito", 
            price: "$10.000", 
            image: "img/kids1.png", 
            description: "Dos porcionesde helado, grajea, gomitas y cono."
        }
    ]
};

// ===================================================
// FUNCIONES AUXILIARES
// ===================================================
function createProductItemHTML(product) {
    return `
        <div class="product-item">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-details">
                <h6>${product.name}</h6>
                <p>${product.description}</p>
                <span class="price">${product.price}</span>
            </div>
        </div>
    `;
}

// ===================================================
// LÓGICA PRINCIPAL
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el modal de productos
    const productsModal = new bootstrap.Modal(document.getElementById('productsModal'));
    const modalTitle = document.getElementById('productsModalLabel');
    const productListContainer = document.getElementById('product-list-container');

    // Configurar los event listeners para las tarjetas de categoría
    document.querySelectorAll('.show-products-modal').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const category = this.getAttribute('data-category');
            const card = this.closest('.category-card');
            const categoryTitle = card.querySelector('h2').textContent;
            const products = allProducts[category] || [];

            // Actualizar el título del modal
            modalTitle.textContent = categoryTitle;

            // Limpiar y llenar el contenedor de productos
            productListContainer.innerHTML = products.length > 0 
                ? products.map(createProductItemHTML).join('')
                : '<p class="text-center py-4">No hay productos disponibles en esta categoría por el momento.</p>';

            // Mostrar el modal
            productsModal.show();
        });
    });

    // Efecto de hover para las tarjetas de categoría
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'translateX(-50%) scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'translateX(-50%) scale(1)';
            }
        });
    });

    // Animación de burbujas adicionales
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Posición aleatoria
        const left = Math.random() * 100;
        const size = Math.random() * 30 + 20;
        const duration = Math.random() * 10 + 5;
        
        bubble.style.left = `${left}%`;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.animationDuration = `${duration}s`;
        
        document.querySelector('.bubbles').appendChild(bubble);
        
        // Eliminar después de la animación
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Crear burbujas cada cierto tiempo
    if (document.querySelector('.bubbles')) {
        setInterval(createBubble, 1500);
    }
});