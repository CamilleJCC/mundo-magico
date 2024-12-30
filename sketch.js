document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.querySelector('.magnifying-glass');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    magnifier.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === magnifier) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, magnifier);
            updateZoomEffect(e);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function updateZoomEffect(e) {
        const zoomArea = document.querySelector('.zoom-area');
        const rect = zoomArea.getBoundingClientRect();
        
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
            const glassEffect = document.querySelector('.glass-effect');
            glassEffect.style.transform = 'scale(2)';
        }
    }

    // Submit button effects
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', () => {
        createSparkles();
        // Add your submission logic here
    });

    function createSparkles() {
        const sparkles = document.createElement('div');
        sparkles.classList.add('sparkles');
        submitBtn.appendChild(sparkles);
        setTimeout(() => sparkles.remove(), 1000);
    }
});
