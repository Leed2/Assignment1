
document.addEventListener("DOMContentLoaded", function() {
    const videoGrid = document.querySelector('.video-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Scroll Left
    prevBtn.addEventListener('click', () => {
        videoGrid.scrollBy({ left: -220, behavior: 'smooth' });
    });

    // Scroll Right
    nextBtn.addEventListener('click', () => {
        videoGrid.scrollBy({ left: 220, behavior: 'smooth' });
    });
});
