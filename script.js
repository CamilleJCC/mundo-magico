document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.querySelector('.magnifying-glass');
    const artwork = document.querySelector('.artwork');
    const glassEffect = document.querySelector('.glass-effect');
    
    function updateZoom(x, y) {
        const rect = artwork.getBoundingClientRect();
        const xPercent = (x - rect.left) / rect.width * 100;
        const yPercent = (y - rect.top) / rect.height * 100;
        
        glassEffect.style.backgroundImage = `url(${artwork.src})`;
        glassEffect.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
        glassEffect.style.backgroundSize = '200%';
    }
    
    function handleMove(e) {
        const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const y = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        updateZoom(x, y);
    }
    
    magnifier.addEventListener('mousemove', handleMove);
    magnifier.addEventListener('touchmove', handleMove);
});


    // Reveal functionality
const revealBtn = document.querySelector('.reveal-btn');
const input = document.querySelector('.magic-input');
const revealedAnswer = document.querySelector('.revealed-answer');

revealBtn.addEventListener('click', () => {
    // Remove existing animation class
    revealedAnswer.classList.remove('reveal-animation');
    
    // Force a reflow to restart animation
    void revealedAnswer.offsetWidth;
    
    // Update content and add animation
    revealedAnswer.textContent = input.value;
    revealedAnswer.classList.add('reveal-animation');
});

});
