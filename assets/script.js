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
/*event listener sur chacune des flèches*/

// arrow left
const arrowleft = document.querySelector(".arrow_left");
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
  /*changement de l'image et du titre
 bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
 bannerText.innerHTML = slides[i].tagLine;
 */
}

// arrow right
const arrowright = document.querySelector(".arrow_right");
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

  /*changement de l'image et du titre
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerText.innerHTML = slides[i].tagLine;
	*/
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

/*

// Fonction pour mettre à jour le point sélectionné
function updateSelectedDot(index) {
	const allDots = dotsBullet.querySelectorAll(".dot");
	
	allDots.forEach(dot => {
	  dot.classList.remove("dot_selected");
	});
	// Ajouter la classe ".dot_selected" au point correspondant à la slide actuelle
	allDots[index].classList.add("dot_selected");
  }
  
  // Fonction pour naviguer vers une slide spécifique
  function goToSlide(index) {
	// Mettre à jour la logique pour naviguer vers la slide correspondante
	// Par exemple, changer l'image et le texte affichés dans le carrousel
	const bannerImg = document.querySelector('.banner-img');
	const tagLine = document.querySelector('#banner p');
	
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;
	
	// Appeler la fonction pour mettre à jour le point sélectionné
	updateSelectedDot(index);
  }
  */
