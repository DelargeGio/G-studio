// 1. Filtrado ultraligero de proyectos
function filterProjects(category) {
    const rows = document.querySelectorAll('.project-row');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.style.background = 'rgba(255,255,255,0.05)';
        btn.style.color = 'var(--text-main, #fff)';
        btn.style.border = '1px solid rgba(255,255,255,0.15)';
        btn.style.fontWeight = '400';
    });
    
    event.target.style.background = 'var(--acid-green, #00ff66)';
    event.target.style.color = '#000';
    event.target.style.border = 'none';
    event.target.style.fontWeight = '700';

    rows.forEach(row => {
        if (category === 'all' || row.getAttribute('data-category') === category) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

// 2. Cotizador con WhatsApp Dinámico en vivo
const form = document.getElementById('grioCalculator');
if (form) {
    form.addEventListener('input', updateWhatsAppLink);
}

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

// 3. Lightbox interactivo (Abre y cierra las imágenes)
const mediaPreviews = document.querySelectorAll('.media-preview img');
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('.lightbox-close');

mediaPreviews.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}