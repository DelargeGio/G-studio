document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');

    // Delegación de eventos robusta para abrir las miniaturas de Tovar
    document.addEventListener('click', (e) => {
        const preview = e.target.closest('.media-preview');
        if (preview) {
            const img = preview.querySelector('img');
            if (img && modal && modalImg) {
                modalImg.src = img.src;
                modal.classList.add('active');
            }
        }
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal) {
            modal.classList.remove('active');
        }
    });
});