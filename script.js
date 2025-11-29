// Animation de glissement
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".slide-gauche, .slide-droite, .slide-bas, .slide-haut, .slide-bas-gauche, .apparition-centre, .apparition-centre-l, .apparition-centre-p"
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
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

// Bouton pour revenire en haut
let lastScroll = window.scrollY;

window.addEventListener("scroll", function () {
  const btn = document.getElementById("boutonHaut");
  let currentScroll = window.scrollY;

  // Si l'utilisateur remonte et n'est pas tout en haut
  if (currentScroll < lastScroll && currentScroll > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  lastScroll = currentScroll;
});

// Clique pour remonter en haut
document.getElementById("boutonHaut").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


// Effet machine à écrire pour le texte d'accueil
const message = `<strong>Bonjour,</strong><br> je m'appelle Rémi, un developpeur`;
  const speed = 50; // vitesse en ms par caractère
  let index = 0;
  let typed = '';

  function typeWriterHTML() {
    if (index < message.length) {
      if (message[index] === '<') {
        // Si on détecte une balise HTML, on l'ajoute complète
        const closeIndex = message.indexOf('>', index);
        typed += message.slice(index, closeIndex + 1);
        index = closeIndex + 1;
      } else {
        typed += message[index];
        index++;
      }
      document.getElementById("typed").innerHTML = typed;
      setTimeout(typeWriterHTML, speed);
    }
  }

  typeWriterHTML();
/// Fin effet machine à écrire pour le texte d'accueil ///

// Affichage PDF dans une balise canvas
const url = "/autre/XD3OZDWaaGlpcgdNKhaN3Krqs8PqkHi4M5KMn0ldqJppQldFuQM0CxNY5FJZ_154334_29112025.pdf";

  pdfjsLib.getDocument(url).promise.then(pdf => {
    pdf.getPage(1).then(page => {
      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = document.getElementById("pdf-viewer");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({ canvasContext: context, viewport });
    });
  });