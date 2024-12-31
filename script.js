document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.querySelector('.magnifying-glass');
    const artwork = document.querySelector('.artwork');
    const revealBtn = document.querySelector('.reveal-btn');
    const input = document.querySelector('.magic-input');

    // Add answers container to DOM
    const responseSection = document.querySelector('.response-section');
    responseSection.innerHTML += '<div class="answers-container"></div>';
    
    function updateZoom(e) {
        const rect = artwork.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const maxX = rect.width - magnifier.offsetWidth;
        const maxY = rect.height - magnifier.offsetHeight;
        
        const boundedX = Math.max(0, Math.min(maxX, x - magnifier.offsetWidth / 2));
        const boundedY = Math.max(0, Math.min(maxY, y - magnifier.offsetHeight / 2));
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            magnifier.style.display = 'block';
            magnifier.style.left = `${boundedX}px`;
            magnifier.style.top = `${boundedY}px`;
            magnifier.style.backgroundImage = `url(${artwork.src})`;
            magnifier.style.backgroundPosition = `${-x * 2 + magnifier.offsetWidth/2}px ${-y * 2 + magnifier.offsetHeight/2}px`;
            magnifier.style.backgroundSize = `${artwork.width * 2}px`;
        } else {
            magnifier.style.display = 'none';
        }
    }

    // Magnifying glass events
    artwork.addEventListener('mousemove', updateZoom);
    artwork.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
    });

    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            // Random positions around the element
            const x = Math.random() * rect.width;
            const y = Math.random() * rect.height;
            
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
            
            element.appendChild(sparkle);
            
            // Remove sparkle after animation
            setTimeout(() => sparkle.remove(), 1500);
        }
    }

function handleReveal() {
    if (input.value.trim()) {
        const answersContainer = document.querySelector('.answers-container');
        
        // Create new answer element with background and styling
        const newAnswer = document.createElement('div');
        newAnswer.className = 'revealed-answer reveal-animation';
        newAnswer.textContent = input.value;
        newAnswer.style.background = '#fff'; // Adding white background for visibility
        
        // Add to container
        answersContainer.appendChild(newAnswer);
        
        // Create sparkles
        createSparkles(newAnswer);
        
        // Clear input
        input.value = '';
    }
}

    // Reveal button event
    revealBtn.addEventListener('click', handleReveal);

    // Allow Enter key to submit
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleReveal();
        }
    });
});
