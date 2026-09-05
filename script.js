document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-container, .project-row, .cap-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

document.addEventListener("click", function (e) {
    const preview = e.target.closest(".media-preview");
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');

    if (preview && modal && modalImg) {
        const img = preview.querySelector("img");
        if (img) {
            modalImg.src = img.src;
            modal.classList.add('active');
        }
    }

    if (modal && (e.target.matches('.lightbox-close') || e.target === modal)) {
        modal.classList.remove('active');
    }
});