document.addEventListener("DOMContentLoaded", () => {
    // --- CONTROLADOR DE TEMAS ---
    const savedTheme = localStorage.getItem("grio_theme");
    if (savedTheme) {
        setTheme(savedTheme, false);
    }

    // --- LIGHTBOX DINÁMICO CON GALERÍA (PREV / NEXT) ---
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    const images = Array.from(document.querySelectorAll(".media-preview img"));
    let currentIndex = 0;

    function updateLightboxImage(index) {
        if (images.length > 0 && modalImg) {
            currentIndex = (index + images.length) % images.length;
            modalImg.src = images[currentIndex].src;
        }
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            if (modal) {
                modal.classList.add("active");
                updateLightboxImage(index);
            }
        });
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            updateLightboxImage(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            updateLightboxImage(currentIndex + 1);
        });
    }

    // Navegación con teclado (Escape, Flecha izquierda, Flecha derecha)
    document.addEventListener("keydown", (e) => {
        if (!modal || !modal.classList.contains("active")) return;
        if (e.key === "Escape") {
            modal.classList.remove("active");
        } else if (e.key === "ArrowLeft") {
            updateLightboxImage(currentIndex - 1);
        } else if (e.key === "ArrowRight") {
            updateLightboxImage(currentIndex + 1);
        }
    });

    // --- REPRODUCTOR DE AUDIO ---
    const audio = document.getElementById("bgAudio");
    const btn = document.getElementById("audioToggleBtn");
    const status = document.getElementById("audioStatus");

    if (btn && audio) {
        btn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play().then(() => {
                    btn.textContent = "❚❚ Pausa";
                    if (status) status.textContent = "Playing...";
                }).catch(e => console.log("Audio play blocked", e));
            } else {
                audio.pause();
                btn.textContent = "▶ Play";
                if (status) status.textContent = "Lo-Fi / Dub";
            }
        });
    }

    // --- COTIZADOR WHATSAPP ---
    const form = document.getElementById('grioCalculator');
    if (form) {
        form.addEventListener('input', updateWhatsAppLink);
    }
});

// Función global para cambiar temas
function setTheme(themeName, save = true) {
    document.body.classList.remove("theme-cyber", "theme-crimson");
    if (themeName === "cyber") {
        document.body.classList.add("theme-cyber");
    } else if (themeName === "crimson") {
        document.body.classList.add("theme-crimson");
    }
    if (save) {
        localStorage.setItem("grio_theme", themeName);
    }
}

// --- FILTRO DE PROYECTOS ---
function filterProjects(category) {
    const rows = document.querySelectorAll(".project-row");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
        btn.style.background = "rgba(255,255,255,0.05)";
        btn.style.color = "var(--text-main, #fff)";
        btn.style.border = "1px solid rgba(255,255,255,0.15)";
        btn.style.fontWeight = "400";
    });

    event.currentTarget.classList.add("active");
    event.currentTarget.style.background = "var(--acid-green, #ccff00)";
    event.currentTarget.style.color = "#000";
    event.currentTarget.style.border = "none";
    event.currentTarget.style.fontWeight = "700";

    rows.forEach(row => {
        if (category === "all" || row.getAttribute("data-category") === category) {
            row.style.display = "grid";
        } else {
            row.style.display = "none";
        }
    });
}

// --- ACTUALIZAR ENLACE WHATSAPP ---
function updateWhatsAppLink() {
    const serviceSelect = document.getElementById('service');
    const urgencySelect = document.getElementById('urgency');
    const whatsappBtn = document.getElementById('whatsappOrderBtn');

    if (!serviceSelect || !urgencySelect || !whatsappBtn) return;

    const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
    const urgencyText = urgencySelect.options[urgencySelect.selectedIndex].text;
    
    const total = parseInt(serviceSelect.value) + parseInt(urgencySelect.value);
    const formattedTotal = total.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'});

    const message = `Hola, quiero contratar este proyecto con GRIO Studio:\n- ${serviceText}\n- ${urgencyText}\n- Estimado: ${formattedTotal}`;
    
    whatsappBtn.href = `https://wa.me/525656691886?text=${encodeURIComponent(message)}`;
}