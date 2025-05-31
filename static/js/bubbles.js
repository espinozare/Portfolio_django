// static/js/bubbles.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bubbles-container');
    
    // Verificar si el contenedor existe
    if (!container) {
        console.error('No se encontró el contenedor de burbujas');
        return;
    }

    const messages = [
        "¡Hola!",
        "Bienvenido",
        "Mira esto",
        "¡Genial!",
        "Increíble",
        "Sigue así",
        "Fabuloso",
        "Eres genial"
    ];
    
    const CONFIG = {
        bubbleCount: 8,
        minSize: 60,
        maxSize: 150,
        minDuration: 8,
        maxDuration: 15,
        spawnInterval: 1500
    };
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = messages[Math.floor(Math.random() * messages.length)];
        
        // Estilos dinámicos
        const size = Math.floor(Math.random() * (CONFIG.maxSize - CONFIG.minSize)) + CONFIG.minSize;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * (CONFIG.maxDuration - CONFIG.minDuration) + CONFIG.minDuration;
        bubble.style.animationDuration = `${duration}s`;
        
        // Color aleatorio con transparencia
        const hue = Math.floor(Math.random() * 360);
        bubble.style.backgroundColor = `hsla(${hue}, 80%, 80%, 0.85)`;
        
        // Eliminar al finalizar animación
        bubble.addEventListener('animationend', () => bubble.remove());
        
        // Eliminar al hacer clic
        bubble.addEventListener('click', () => {
            bubble.style.opacity = '0';
            setTimeout(() => bubble.remove(), 300);
        });
        
        container.appendChild(bubble);
    }

    function startBubbles() {
        // Iniciar burbujas inmediatamente
        for (let i = 0; i < CONFIG.bubbleCount; i++) {
            setTimeout(createBubble, i * 500);
        }
        
        // Mantener burbujas constantemente
        setInterval(() => {
            if (container.children.length < CONFIG.bubbleCount) {
                createBubble();
            }
        }, CONFIG.spawnInterval);
    }
    
    startBubbles();
});