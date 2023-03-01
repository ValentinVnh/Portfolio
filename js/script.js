

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

function hoverNavDiv(){
  const navDiv = document.querySelector("body > header > nav > div > img");
  navDiv.style.transform = "translateX(-10px)";
  navDiv.style.transition = "1s ease";
}

function hoverNavDivOut(){
    const navDiv = document.querySelector("body > header > nav > div > img");
    navDiv.style.transform = "translateX(0px)";
    navDiv.style.transition = "1s ease";
}

const navDivTxt = document.querySelector("body > header > nav > div > a");
navDivTxt.addEventListener("mouseover", hoverNavDiv);
navDivTxt.addEventListener("mouseout", hoverNavDivOut);














