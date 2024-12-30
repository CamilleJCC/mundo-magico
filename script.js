document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.querySelector('.magnifying-glass');
    
    // Touch events for mobile
    magnifier.addEventListener('touchstart', handleTouchStart, { passive: false });
    magnifier.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Mouse events for desktop
    magnifier.addEventListener('mousedown', handleDragStart);
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);

    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
    }

    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        magnifier.style.left = touch.clientX - 30 + 'px';
        magnifier.style.top = touch.clientY - 30 + 'px';
    }

    function updatePosition(x, y) {
        magnifier.style.left = x - 30 + 'px';
        magnifier.style.top = y - 30 + 'px';
    }

    // Reveal functionality
    const revealBtn = document.querySelector('.reveal-btn');
    revealBtn.addEventListener('click', () => {
        const input = document.querySelector('.magic-input');
        const revealedAnswer = document.querySelector('.revealed-answer');
        
        revealedAnswer.textContent = input.value;
        revealedAnswer.classList.add('reveal-animation');
        createSparkles();
    });
});
