(function () {
    const isPages = window.location.pathname.includes('/pages/');
    const r = isPages ? '../' : './';

    const nav = document.createElement('div');
    nav.innerHTML = `
<nav class="navbar navbar-expand-lg custom-header" id="mainNav">
    <div class="container-fluid" style="padding:0;">
        <a class="navbar-brand" href="${r}index.html">
            <span style="font-family:'Anta',sans-serif; font-size:1.3rem; color:#fff; font-weight:700;"><span style="color:#bd39ff;"></span></span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation" style="border-color:rgba(255,255,255,.5);">
            <span class="navbar-toggler-icon" style="filter:invert(1);"></span>
        </button>
        <div class="collapse navbar-collapse" id="navContent" style="margin-left: 20px;">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style="gap:2px;">
                <li class="nav-item"><a class="nav-link" href="${r}index.html" style="color:#fff;">Accueil</a></li>
                <li class="nav-item"><a class="nav-link" href="${r}pages/parcours.html" style="color:#fff;">Parcours</a></li>
                <li class="nav-item"><a class="nav-link" href="${r}pages/profil.html" style="color:#fff;">Profil</a></li>
                <li class="nav-item"><a class="nav-link" href="${r}pages/cv.html" style="color:#fff;">CV</a></li>
                
                <li class="nav-item"><a class="nav-link" href="${r}pages/projets.html" style="color:#fff;">Projets</a></li>
                
                <!-- <li class="nav-item"><a class="nav-link" href="${r}pages/veille.html" style="color:#fff;">Veille</a></li> -->
                <li class="nav-item"><a class="nav-link" href="${r}pages/certification.html" style="color:#fff;">Certifications</a></li>
                <li class="nav-item"><a class="nav-link" href="${r}pages/contact.html" style="color:#fff;">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>`;
    document.body.insertBefore(nav.firstElementChild, document.body.firstChild);
})();
