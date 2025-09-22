document.addEventListener('DOMContentLoaded', () => {
    // Crear pétalos cayendo
    createFallingPetals();
    
    // Crear partículas brillantes
    createGlitterParticles();
    
    // Animar texto con fade-in
    animateText();
});

// Función para crear pétalos cayendo
function createFallingPetals() {
    const collages = document.querySelectorAll('.collage');
    
    collages.forEach(collage => {
        const numPetals = 10 + Math.floor(Math.random() * 5);
        
        for (let i = 0; i < numPetals; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            
            // Estilos para el pétalo
            petal.style.position = 'absolute';
            petal.style.width = `${5 + Math.random() * 10}px`;
            petal.style.height = `${10 + Math.random() * 15}px`;
            petal.style.backgroundColor = getRandomColor(['#FFD700', '#FFEB3B', '#FFC107', '#FFFFFF', '#FFF9C4']);
            petal.style.borderRadius = '50% 0 50% 0';
            petal.style.top = '-20px';
            petal.style.left = `${Math.random() * 100}%`;
            petal.style.opacity = `${0.6 + Math.random() * 0.4}`;
            petal.style.zIndex = '12';
            petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Animación de caída
            const duration = 5 + Math.random() * 10;
            const delay = Math.random() * 15;
            
            petal.style.animation = `fallDown ${duration}s linear ${delay}s infinite`;
            
            collage.appendChild(petal);
        }
    });
}

// Función para crear partículas brillantes
function createGlitterParticles() {
    const particlesContainers = document.querySelectorAll('.particles');
    
    particlesContainers.forEach(container => {
        const numParticles = 15 + Math.floor(Math.random() * 10);
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            
            // Estilos para la partícula
            particle.style.position = 'absolute';
            particle.style.width = `${2 + Math.random() * 3}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = getRandomColor(['#FFD700', '#FFEB3B', '#FFC107', '#FFFFFF']);
            particle.style.borderRadius = '50%';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.opacity = `${0.4 + Math.random() * 0.6}`;
            particle.style.boxShadow = '0 0 5px 2px rgba(255, 215, 0, 0.3)';
            
            // Animación de flotación
            const duration = 3 + Math.random() * 7;
            const delay = Math.random() * 5;
            
            particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            container.appendChild(particle);
        }
    });
}

// Función para animar texto con fade-in
function animateText() {
    const textOverlays = document.querySelectorAll('.text-overlay');
    
    textOverlays.forEach((text, index) => {
        // Retraso escalonado para cada texto
        const delay = 0.2 + index * 0.1;
        text.style.animationDelay = `${delay}s`;
    });
}

// Función para obtener un color aleatorio de una paleta
function getRandomColor(palette) {
    return palette[Math.floor(Math.random() * palette.length)];
}

// Añadir efecto de mariposas pequeñas
function addButterflies() {
    const collages = document.querySelectorAll('.collage');
    
    collages.forEach(collage => {
        const numButterflies = 1 + Math.floor(Math.random() * 2); // 1-2 mariposas por collage
        
        for (let i = 0; i < numButterflies; i++) {
            const butterfly = document.createElement('div');
            butterfly.classList.add('butterfly');
            
            // Crear SVG para la mariposa
            butterfly.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M10,3 Q13,0 16,3 T10,9 Q7,12 4,9 T10,3" fill="#FFD700" opacity="0.8" />
                </svg>
            `;
            
            // Posicionar la mariposa
            butterfly.style.position = 'absolute';
            butterfly.style.top = `${20 + Math.random() * 60}%`;
            butterfly.style.left = `${Math.random() * 80}%`;
            butterfly.style.zIndex = '13';
            butterfly.style.transform = `scale(${0.8 + Math.random() * 0.4}) rotate(${Math.random() * 45}deg)`;
            
            // Animación de vuelo
            const duration = 10 + Math.random() * 15;
            butterfly.style.animation = `float ${duration}s ease-in-out infinite`;
            
            collage.appendChild(butterfly);
        }
    });
}

// Añadir corazones sutiles
function addHearts() {
    const collages = document.querySelectorAll('.collage');
    
    collages.forEach(collage => {
        const numHearts = 2 + Math.floor(Math.random() * 3); // 2-4 corazones por collage
        
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Crear SVG para el corazón
            heart.innerHTML = `
                <svg width="15" height="15" viewBox="0 0 15 15">
                    <path d="M7.5,13.5 L2,8 C0,6 0,3 2,1 C4,-1 7,0 7.5,2 C8,0 11,-1 13,1 C15,3 15,6 13,8 L7.5,13.5 Z" fill="#FF9999" opacity="0.6" />
                </svg>
            `;
            
            // Posicionar el corazón
            heart.style.position = 'absolute';
            heart.style.top = `${Math.random() * 80}%`;
            heart.style.left = `${Math.random() * 80}%`;
            heart.style.zIndex = '11';
            heart.style.transform = `scale(${0.6 + Math.random() * 0.5}) rotate(${Math.random() * 30 - 15}deg)`;
            
            collage.appendChild(heart);
        }
    });
}

// Llamar a las funciones adicionales después de cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Funciones principales
    createFallingPetals();
    createGlitterParticles();
    animateText();
    
    // Funciones adicionales
    addButterflies();
    addHearts();
    
    // Añadir efecto de zoom en las fotos al pasar el ratón
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        frame.addEventListener('mouseover', () => {
            frame.classList.add('zoom-effect');
        });
        
        frame.addEventListener('mouseout', () => {
            frame.classList.remove('zoom-effect');
        });
    });
});