document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.hover-image');

    images.forEach(image => {
        let isDragging = false;
    
        image.addEventListener('mousedown', (e) => {
            isDragging = true;
            handleDrag(e);
        });
    
        image.addEventListener('touchstart', (e) => {
            isDragging = true;
            handleDrag(e.touches[0]);
        });
    
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                handleDrag(e);
            }
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            image.style.transformOrigin = `${x / 3}px ${y / 3}px`;
        });
    
        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                handleDrag(e.touches[0]);
            }
        });
    
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
    
        function handleDrag(e) {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            image.style.transformOrigin = `${x / 3}px ${y / 3}px`;
        }
    
        image.addEventListener('mouseenter', () => {
            image.classList.add('expanded');
        });
    
        image.addEventListener('mouseleave', () => {
            image.classList.remove('expanded');
        });
    });


});