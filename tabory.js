document.querySelectorAll('.gallery').forEach(gallery => {
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;
    let currentImages = [];

    const lightbox = gallery.nextElementSibling; // Každý lightbox je hned po galerii
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close');
    const prevBtn = lightbox.querySelector('.prev');
    const nextBtn = lightbox.querySelector('.next');

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImages = Array.from(images); // Uložíme jen fotky z tohoto tábora
            currentIndex = index;
            showImage();
            updateButtons();
        });
    });

    function showImage() {
        lightboxImg.src = currentImages[currentIndex].src;
        lightbox.style.display = 'flex';
        updateButtons();
    }

    function updateButtons() {
        // Nastavíme opacity a pointer-events pro šipky
        if (currentIndex === 0) {
            prevBtn.style.opacity = 0;
            prevBtn.style.pointerEvents = 'none';
        } else {
            prevBtn.style.opacity = 1;
            prevBtn.style.pointerEvents = 'auto';
        }

        if (currentIndex === currentImages.length - 1) {
            nextBtn.style.opacity = 0;
            nextBtn.style.pointerEvents = 'none';
        } else {
            nextBtn.style.opacity = 1;
            nextBtn.style.pointerEvents = 'auto';
        }
    }

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
            showImage();
            updateButtons();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showImage();
            updateButtons();
        }
    });
});
