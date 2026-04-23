// Animation de glissement au scroll
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
        ".slide-gauche, .slide-droite, .slide-bas, .slide-haut, .slide-bas-gauche, .apparition-centre, .apparition-centre-l, .apparition-centre-p",
    );
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 },
    );
    elements.forEach((el) => observer.observe(el));

    // Barres de compétences animées
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.skill-fill').forEach(fill => {
                    fill.style.width = fill.dataset.pct + '%';
                });
                barObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skills-block').forEach(b => barObserver.observe(b));

    // Formulaire contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let valid = true;
            ['nom','email','sujet','message'].forEach(id => {
                const el  = document.getElementById(id);
                const err = document.getElementById(id + '-err');
                if (!el || !el.value.trim()) {
                    if (err) { err.textContent = 'Ce champ est requis.'; err.style.display = 'block'; }
                    valid = false;
                } else {
                    if (err) { err.textContent = ''; err.style.display = 'none'; }
                }
            });
            if (!valid) return;

            const nom     = document.getElementById('nom').value.trim();
            const email   = document.getElementById('email').value.trim();
            const sujet   = document.getElementById('sujet').value;
            const message = document.getElementById('message').value.trim();
            const body    = encodeURIComponent("Nom : " + nom + "\nEmail : " + email + "\nSujet : " + sujet + "\n\n" + message);
            window.location.href = "mailto:votre@email.fr?subject=" + encodeURIComponent('[Portfolio] ' + sujet) + "&body=" + body;

            const alertEl = document.getElementById('alertSuccessContact');
            if (alertEl) { alertEl.classList.add('show'); }
            contactForm.reset();
            setTimeout(() => { if (alertEl) alertEl.classList.remove('show'); }, 6000);
        });
    }
});

// Bouton retour en haut
let lastScroll = window.scrollY;
window.addEventListener("scroll", function () {
    const btn = document.getElementById("boutonHaut");
    if (!btn) return;
    let currentScroll = window.scrollY;
    btn.style.display = (currentScroll < lastScroll && currentScroll > 100) ? "block" : "none";
    lastScroll = currentScroll;
});
document.addEventListener("click", function(e) {
    if (e.target && e.target.id === "boutonHaut") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
