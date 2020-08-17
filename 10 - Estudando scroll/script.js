<<<<<<< HEAD
function primeiroScroll() {
	window.scrollTo(0, 0);
}

function segundoScroll() {
	window.scrollTo(300, 750);
}

function terceiroScroll() {
	window.scrollTo(0, 1450);
}

let quarta = document.getElementById("quarta-section");
let quinta = document.getElementById("quinta-section");

document.addEventListener("scroll", function( ){
	if (document.documentElement.scrollTop > 1400) {
		quarta.classList.add("pink");
	}
	
	if (document.documentElement.scrollTop > 2100) {
		quinta.classList.add("image");
	}
});

=======
function primeiroScroll() {
	window.scrollTo(0, 0);
}

function segundoScroll() {
	window.scrollTo(300, 750);
}

function terceiroScroll() {
	window.scrollTo(0, 1450);
}

let quarta = document.getElementById("quarta-section");
let quinta = document.getElementById("quinta-section");

document.addEventListener("scroll", function( ){
	if (document.documentElement.scrollTop > 1400) {
		quarta.classList.add("pink");
	}
	
	if (document.documentElement.scrollTop > 2100) {
		quinta.classList.add("image");
	}
});

>>>>>>> 06f37b1b0691ef9dc1d3097ab35d8e9932c9e029
