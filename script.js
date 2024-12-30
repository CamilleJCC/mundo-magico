document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.querySelector('.magnifying-glass');
    const artwork = document.querySelector('.artwork');
    const glassEffect = document.querySelector('.glass-effect');
    let isDragging = false;
    let startX, startY, initialX, initialY;

    // Magnifying glass drag functionality
    function startDrag(x, y) {
        isDragging = true;
        startX = x;
        startY = y;
        initialX = magnifier.offsetLeft;
        initialY = magnifier.offsetTop;
    }

    function moveMagnifier(x, y) {
        if (!isDragging) return;
        const dx = x - startX;
        const dy = y - startY;
        magnifier.style.left = `${initialX + dx}px`;
        magnifier.style.top = `${initialY + dy}px`;
        updateZoom(x, y);
    }

    function stopDrag() {
        isDragging = false;
    }

    // Zoom functionality
    function updateZoom(x, y) {
        const rect = artwork.getBoundingClientRect();
        const xPercent = (x - rect.left) / rect.width * 100;
        const yPercent = (y - rect.top) / rect.height * 100;
        
        glassEffect.style.backgroundImage = `url(${artwork.src})`;
        glassEffect.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
        glassEffect.style.backgroundSize = '200%';
    }

    // Mouse events
    magnifier.addEventListener('mousedown', (e) => {
        startDrag(e.clientX, e.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        moveMagnifier(e.clientX, e.clientY);
    });

    document.addEventListener('mouseup', stopDrag);

    // Touch events
    magnifier.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        moveMagnifier(touch.clientX, touch.clientY);
    });

    document.addEventListener('touchend', stopDrag);

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
