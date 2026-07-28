// Fonction pour changer la couleur de fond du bouton "Menu"
function toggleMenu() {
  const menu = document.querySelector(".enTête-menuElément");
  menu.classList.toggle("active");
}

// Fonction pour faire défiler horizontalement la liste des commentaires
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".lesCommentaire-scroll");
  const points = document.querySelectorAll(".pointChoix .point");
  const items = Array.from(container.children);

  function updatePoints() {
    let minDiff = Infinity,
      idx = 0;
    items.forEach((el, i) => {
      const diff = Math.abs(
        el.getBoundingClientRect().left - container.getBoundingClientRect().left
      );
      if (diff < minDiff) {
        minDiff = diff;
        idx = i;
      }
    });
    points.forEach(
      (pt, i) => (pt.style.background = i === idx ? "#043873" : "#4F9CF9")
    );
  }

  container.addEventListener("scroll", updatePoints);

  points.forEach((pt, idx) => {
    pt.addEventListener("click", () => {
      items[idx].scrollIntoView({ behavior: "smooth", inline: "start" });
    });
  });

  window.addEventListener("resize", updatePoints);
  updatePoints();

  // --- Auto-scroll timer ---
  let autoScrollIndex = 0;
  setInterval(() => {
    autoScrollIndex = (autoScrollIndex + 1) % items.length;
    const item = items[autoScrollIndex];
    container.scrollLeft = item.offsetLeft - container.offsetLeft;
    updatePoints();
  }, 15000);
});

window.addEventListener("wheel", function (e) {
  const container = document.querySelector(".lesCommentaire-scroll");
  if (!container) return;

  const isHovering = e.target.closest(".lesCommentaire-scroll");
  if (isHovering && e.deltaY !== 0) {
    container.scrollLeft += e.deltaY;
  }
});

// Fonction pour ajouter une puce de design
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[class~="•s"]').forEach(function (elem) {
    // Vérifie qu'il n'y a pas déjà une puce
    if (!elem.querySelector(".puce-design")) {
      const puce = document.createElement("span");
      puce.className = "puce-design";
      for (let i = 1; i <= 4; i++) {
        const carre = document.createElement("span");
        carre.className = "c" + i;
        puce.appendChild(carre);
      }
      elem.insertBefore(puce, elem.firstChild);
    }
  });
});

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
