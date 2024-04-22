// Tableau des slides à parcourir
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//Variables---------------------------------------

//Récupérer le seleteur .arrow_left
const arrowleft = document.querySelector(".arrow_left");

//Récupérer le seleteur .arrow_right
const arrowright = document.querySelector(".arrow_right");

let currentIndex = 0;

// Récupérer la div banner
let bannerDiv = document.getElementById("banner");

// Récupérer l'image à l'intérieur de la div
let bannerImg = bannerDiv.querySelector(".banner-img");

// Récupérer la balise p à l'intérieur de la div
let bannerText = bannerDiv.querySelector("p");

// Récupérer le point rempli du selecteur .dots
let dotsBullet = document.querySelector(".dots");

//Fonction pour ajouter les bullets
//let i = 0;
function addDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";

    if (currentIndex === i) {
      dot.classList.add("dot_selected");
    }
    dotsBullet.appendChild(dot);
  }
}
addDots()
let dotsCheck = document.querySelectorAll(".dot");

//----------------------------------------------

// Fonction pour mettre à jour le carousel
function updateCarousel(index) {
  // Supprimer la classe ".dot_selected" de tous les points
  dotsCheck[currentIndex].classList.remove("dot_selected");

  // Mettre à jour l'index de la slide
  currentIndex = index;

  // Ajouter la classe ".dot_selected" au point correspondant à la slide actuelle
  dotsCheck[currentIndex].classList.add("dot_selected");

  // Mettre à jour l'image et le texte du carousel
  bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;
}
/*event listener sur chacune des flèches*/

// arrow left ------------------------------------
arrowleft.addEventListener("click", function() {
  // Mettre à jour l'index de la slide
  const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  updateCarousel(newIndex);
});

// arrow right ------------------------------------
arrowright.addEventListener("click", function() {
  // Mettre à jour l'index de la slide
  const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  updateCarousel(newIndex);
});
