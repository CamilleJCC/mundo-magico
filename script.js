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
    
    // Keep magnifier within bounds
    const maxX = rect.width - magnifier.offsetWidth;
    const maxY = rect.height - magnifier.offsetHeight;
    
    const boundedX = Math.max(0, Math.min(maxX, x - magnifier.offsetWidth / 2));
    const boundedY = Math.max(0, Math.min(maxY, y - magnifier.offsetHeight / 2));
    
    // Calculate the correct background position based on cursor location
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;
    
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        magnifier.style.display = 'block';
        magnifier.style.left = `${boundedX}px`;
        magnifier.style.top = `${boundedY}px`;
        // This is the key change - align background position with cursor
        magnifier.style.backgroundPosition = `${-x * 2 + magnifier.offsetWidth/2}px ${-y * 2 + magnifier.offsetHeight/2}px`;
    } else {
        magnifier.style.display = 'none';
    }
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
