

window.addEventListener("load", fenetreModale);

function fenetreModale() {
    const modal = document.createElement("div");
    modal.classList.add("baseModal");
  
    const cadre = document.createElement("div");
    cadre.classList.add("cadreFModal");

    const texte = document.createElement("div");
    texte.classList.add("texteFModal");
    texte.textContent = "Mon site portfolio est en construction... Revenez plus tard !";

    const linkedin = document.createElement("div")
    linkedin.classList.add("linkedinFModal");
    linkedin.innerHTML = '<a href="https://www.linkedin.com/in/valentin-vanhove/">Voici mon LinkedIn</a>';
  
    cadre.appendChild(texte);
    cadre.appendChild(linkedin)
    modal.appendChild(cadre);
    document.body.appendChild(modal);

  }