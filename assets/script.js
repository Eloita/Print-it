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
//Variables

//Récupérer le seleteur arrow_left
const arrowleft = document.querySelector(".arrow_left");

//Récupérer le seleteur arrow_right
const arrowright = document.querySelector(".arrow_right");

let currentIndex = 0;

// Récupérer la div banner
let bannerDiv = document.getElementById("banner");

// Récupérer l'image à l'intérieur de la div
let bannerImg = bannerDiv.querySelector(".banner-img");

// Récupérer la balise p à l'intérieur de la div
let bannerText = bannerDiv.querySelector("p");


//----------------------------------------------
/*event listener sur chacune des flèches*/

// arrow left
arrowleft.addEventListener("click", slideLeft);
function slideLeft() {
  // console.log("Vous avez cliqué sur la flèche de gauche");
  // Supprimer la classe ".dot_selected" de tous les points
  dotsCheck[i].classList.remove("dot_selected");

  /*i -= 1; lors de l'étape 4, puis condition pour avoir le défilement étape 5*/
  if (i <= 0) {
    i = slides.length - 1;
  } else {
    i--;
  }
  // Ajouter la classe ".dot_selected" au point correspondant à la slide actuelle
  dotsCheck[i].classList.add("dot_selected");
}

// arrow right

arrowright.addEventListener("click", slideRight);
function slideRight() {
  /*console.log("Vous avez cliqué sur la flèche de droite");*/
  // Supprimer la classe ".dot_selected" de tous les points
  dotsCheck[i].classList.remove("dot_selected");
  /*i += 1; lors de létape 4, puis condition pour avoir le défilement étape 5*/

  if (i >= slides.length - 1) {
    i = 0;
  } else {
    i++;
  }
  // Ajouter la classe ".dot_selected" au point correspondant à la slide actuelle
  dotsCheck[i].classList.add("dot_selected");
}

let dotsBullet = document.querySelector(".dots");

let i = 0;
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";

  dotsBullet.appendChild(dot);
}

let dotsCheck = document.querySelectorAll(".dot");
dotsCheck[i].classList.add("dot_selected");

//--------------------------------



// arrow left
arrowleft.addEventListener("click", function() {
  // Mettre à jour l'index de la slide
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  // Mettre à jour l'image et le texte du carousel
  bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;
});

// arrow right
arrowright.addEventListener("click", function() {
  // Mettre à jour l'index de la slide
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  // Mettre à jour l'image et le texte du carousel
  bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;
});
