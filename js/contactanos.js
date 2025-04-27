document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.querySelector('.bubbles');
    
    // Crear burbujas adicionales
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Posición y tamaño aleatorio
        const size = Math.random() * 60 + 20;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        
        bubblesContainer.appendChild(bubble);
        
        // Eliminar después de la animación
        setTimeout(() => {
            bubble.remove();
        }, (duration + delay) * 1000);
    }
    
    // Crear burbujas cada cierto tiempo
    if (bubblesContainer) {
        // Primero limpiar las burbujas estáticas
        bubblesContainer.innerHTML = '';
        
        // Crear algunas burbujas iniciales
        for (let i = 0; i < 5; i++) {
            createBubble();
        }
        
        // Seguir creando burbujas periódicamente
        setInterval(createBubble, 3000);
    }
});