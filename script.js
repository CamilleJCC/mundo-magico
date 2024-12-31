document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.querySelector('.magnifying-glass');
    const artwork = document.querySelector('.artwork');
    const glassEffect = document.querySelector('.glass-effect');
    
    // Set up initial magnifier properties
    magnifier.style.backgroundImage = `url(${artwork.src})`;
    magnifier.style.backgroundRepeat = "no-repeat";
    magnifier.style.backgroundSize = (artwork.width * 2.5) + "px " + (artwork.height * 2.5) + "px";
    
    function updateZoom(e) {
        const rect = artwork.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Position the magnifier
        magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
        
        // Calculate the background position
        const bgX = (x / rect.width) * 100;
        const bgY = (y / rect.height) * 100;
        
        magnifier.style.backgroundPosition = `${-x * 1.5}px ${-y * 1.5}px`;
    }

    // Mouse events
    artwork.addEventListener('mousemove', (e) => {
        magnifier.style.display = 'block';
        updateZoom(e);
    });

    artwork.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
    });

    // Touch events
    artwork.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        magnifier.style.display = 'block';
        updateZoom(touch);
    });

    artwork.addEventListener('touchend', () => {
        magnifier.style.display = 'none';
    });

    // Reveal functionality
    const revealBtn = document.querySelector('.reveal-btn');
    const input = document.querySelector('.magic-input');
    const revealedAnswer = document.querySelector('.revealed-answer');

    revealBtn.addEventListener('click', () => {
        revealedAnswer.classList.remove('reveal-animation');
        void revealedAnswer.offsetWidth;
        revealedAnswer.textContent = input.value;
        revealedAnswer.classList.add('reveal-animation');
    });
});
