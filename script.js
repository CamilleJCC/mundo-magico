document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.querySelector('.magnifying-glass');
    let isDragging = false;
    let startX, startY, initialX, initialY;

    // Touch events
    magnifier.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    });

    magnifier.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        moveMagnifier(touch.clientX, touch.clientY);
    });

    magnifier.addEventListener('touchend', stopDrag);

    // Mouse events
    magnifier.addEventListener('mousedown', (e) => {
        startDrag(e.clientX, e.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveMagnifier(e.clientX, e.clientY);
    });

    document.addEventListener('mouseup', stopDrag);

    function startDrag(x, y) {
        isDragging = true;
        startX = x;
        startY = y;
        initialX = magnifier.offsetLeft;
        initialY = magnifier.offsetTop;
    }

    function moveMagnifier(x, y) {
        const dx = x - startX;
        const dy = y - startY;
        magnifier.style.left = `${initialX + dx}px`;
        magnifier.style.top = `${initialY + dy}px`;
    }

    function stopDrag() {
        isDragging = false;
    }

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
