window.addEventListener("load", fenetreModale);

function fenetreModale() {
  const modal = document.createElement("div");
  modal.classList.add("baseModal");

  const cadre = document.createElement("div");
  cadre.classList.add("cadreFModal");

  const texte = document.createElement("div");
  texte.classList.add("texteFModal");
  texte.textContent =
    "Mon site portfolio est en construction... Revenez plus tard !";

  const linkedin = document.createElement("div");
  linkedin.classList.add("linkedinFModal");
  linkedin.innerHTML =
    '<a href="https://www.linkedin.com/in/valentin-vanhove/">Voici mon LinkedIn</a>';

  cadre.appendChild(texte);
  cadre.appendChild(linkedin);
  modal.appendChild(cadre);
  document.body.appendChild(modal);
}

const nav1 = document.querySelector("body > header > nav > ul > li:nth-child(1) > a");
const nav2 = document.querySelector("body > header > nav > ul > li:nth-child(2) > a");
const nav3 = document.querySelector("body > header > nav > ul > li:nth-child(3) > a");


window.addEventListener("load", colorNav);

function colorNav() {
  if (window.location.href === "http://localhost:63342/Portfolio/index.html") {
    nav1.style.color = "#3E83FB";
    nav1.style.borderRadius = "10px";
  }
  else if (window.location.href === "http://localhost:63342/Portfolio/resume.html"){
    nav2.style.color = "#3E83FB";
    nav2.style.borderRadius = "10px";
  }
  else if (window.location.href === "http://localhost:63342/Portfolio/portfolio.html"){
    nav3.style.color = "#3E83FB";
    nav3.style.borderRadius = "10px";
  }
}















