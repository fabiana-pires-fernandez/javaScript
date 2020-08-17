// Carregando canvas no script
let canvas = document.getElementById("meu-canvas");

// Pegando o papel do canvas
let papel = canvas.getContext("2d");

// Adicionando caminho das imagens que utilizaremos no canvas
let fundo = { 
	url: "./imgs/fundo.png"
}

let vaca = {
	url: "./imgs/vaca.png"
}

let porco = {
	url: "./imgs/porco.png"
}

let frango = {
	url: "./imgs/frango.png"
}

fundo.imagem = new Image( );
fundo.imagem.src = fundo.url;

vaca.imagem = new Image( );
vaca.imagem.src = vaca.url;

porco.imagem = new Image( );
porco.imagem.src = porco.url;

frango.imagem = new Image( );
frango.imagem.src = frango.url;

// evento que avisa toda vez que essa imagem for carregada
fundo.imagem.addEventListener("load", carregaFundo);
vaca.imagem.addEventListener("load", carregaVaca);
porco.imagem.addEventListener("load", carregaPorco);
frango.imagem.addEventListener("load", carregaFrango);

// Desenha no canvas o fundo
function carregaFundo( ){
	papel.drawImage(fundo.imagem, 0, 0);
}

// Carrega vaca em numeros aleatorios
function carregaVaca( ){
	let numeroVaca = numeroAleatorio(2, 10);
	
	for(let i=0; i<numeroVaca; i++){
		
		let xA = numeroAleatorio(100, 400);
		let yA = numeroAleatorio(100, 400);
		papel.drawImage(vaca.imagem, xA, yA);
	}
}

// Carrega porco em numeros aleatorios
function carregaPorco( ){
	let numeroPorco = numeroAleatorio(2, 10);
	
	for(let i=0; i<numeroPorco; i++){
		
		let xA = numeroAleatorio(100, 400);
		let yA = numeroAleatorio(100, 400);
		papel.drawImage(porco.imagem, xA, yA);
	}
}

// Carrega vacas em numeros aleatorios
function carregaFrango( ){
	let numeroFrango = numeroAleatorio(2, 10);
	
	for(let i=0; i<numeroFrango; i++){
		
		let xA = numeroAleatorio(100, 400);
		let yA = numeroAleatorio(100, 400);
		papel.drawImage(frango.imagem, xA, yA);
	}
}

// Gerar um número aleatório de x e y 
function numeroAleatorio(x, y) {
	return Math.floor(Math.random()*(y-x)+1) + x;
}








