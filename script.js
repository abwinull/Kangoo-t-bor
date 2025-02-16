document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navigace = document.querySelector('.navigace');
    const scrollThreshold = window.innerHeight * 0.6; // 60vh

    console.log('Scroll Y:', window.scrollY, 'Threshold:', scrollThreshold);

    if (window.scrollY > scrollThreshold) {
        header.classList.add('visible'); // Zobrazí header
        navigace.classList.add('hidden'); // Schová navigaci
    } else {
        header.classList.remove('visible'); // Skryje header
        navigace.classList.remove('hidden'); // Zobrazí navigaci
    }
});
