// Função mostra primeira imagem e chama função do slide 2
function slide1() {
	document.getElementById('meu-banner').src="imgs/primeira-imagem.jpg";
	setTimeout("slide2()", 2000)
}

// Função mostra segunda imagem e chama função do slide 3
function slide2() {
	document.getElementById('meu-banner').src="imgs/segunda-imagem.jpg";
	setTimeout("slide3()", 2000)
}

// Função mostra terceira imagem e chama função do slide 1
function slide3() {
	document.getElementById('meu-banner').src="imgs/terceira-imagem.jpg";
	setTimeout("slide1()", 2000)
}
	