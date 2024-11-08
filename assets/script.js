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

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


arrowLeft.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche');
    // alert('la flèche gauche');
    
});


arrowRight.addEventListener('click', function() {
    console.log('Clic sur la flèche droite');
    // alert('la flèche droite');
  
});


const bannerImg = document.querySelector('.banner-img'); 
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0; 


function updateSlide(index) {
	
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	
	tagLine.innerHTML = slides[index].tagLine;

	dots.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i === index);
	});
}

document.querySelector('.arrow_right').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % slides.length; 
	updateSlide(currentIndex);
});


document.querySelector('.arrow_left').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
	updateSlide(currentIndex);
});


updateSlide(currentIndex);