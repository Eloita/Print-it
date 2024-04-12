const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/*event listener sur chacune des flèches

let arrowleft = document.querySelector(".arrow_left");
 function slideLeft() {
   console.log("Vous avez cliqué sur la flèche de gauche");
 }
 arrowleft.addEventListener("click", slideLeft);

 let arrowright = document.querySelector(".arrow_right");
 function slideRight() {
   console.log("Vous avez cliqué sur la flèche de droite");
 }
 arrowright.addEventListener("click", slideRight);
*/
/*
 const dotsBullet = document.querySelector(".dots");
 let i = 0;
 for (let i = 0; i < slides.length; i++) {
   const dot = document.createElement("div");
   dot.className = "dot";
   dotsBullet.appendChild(dot);
 }
 /*const dotsCheck = document.querySelectorAll(".dot");
 const bannerImage = document.querySelector(".banner-img");
 const bannerText = document.querySelector("#banner p");
 let positionImage = 0;
 setClassAndImage();

 dotsCheck[i].classList.add("dot_selected");
 let dotsCheck = document.querySelectorAll(".dot");
 dotsCheck[i].classList.add("dot_selected");

 function changeClass(action) {
	if (action === "remove") {
	  dotsCheck[positionImage].classList.remove("dot_selected");
	}
	if (action === "add") {
	  dotsCheck[positionImage].classList.add("dot_selected");
	}
  }
  function setClassAndImage() {
	changeClass("add");*/
	/*changement de l'image et du titre
	bannerImage.src = `./assets/images/slideshow/${slides[positionImage].image}`;
	bannerText.innerHTML = slides[positionImage].tagLine;
  }
*/