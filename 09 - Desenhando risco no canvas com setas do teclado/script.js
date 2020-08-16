// Pegar o elemento do html pelo id e declarando em uma variável
let canvas = document.getElementById("meu-canvas");

// Pedindo um papel para desenhar
// se em 2d declarar(x,y) e em 3d declarar (x,y,z)
let papel = canvas.getContext("2d");

// Definindo onde começar o risco
let x = 50;
let y = 50;

// variável com objeto indicando código das setas do teclado
let teclas = {
	Up: 38,
	Down: 40,
	Right: 39,
	Left: 37
}

// definindo o tamanho do risco
let movimento = 10;


function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidth = 3;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}

// Adicionando escuta quando clicar em uma tecla do teclado e ao clicar chama a função
document.addEventListener("keydown", desenhaLinha);

// função acionada ao clicar nas setas
function desenhaLinha(event) {
	switch(event.keyCode) {
		// se tecla para baixo
		case teclas.Down:
			desenha("green", x, y, x, y+movimento);
			y = y + movimento;
		break;
		case teclas.Up:
		// se tecla para cima
			desenha("green", x, y, x, y-movimento);
			y = y - movimento;
		break;
		case teclas.Right:
		// se tecla para direita
			desenha("green", x, y, x+movimento, y);
			x = x + movimento;
		break;
		case teclas.Left:
		// se tecla para esquerda
			desenha("green", x, y, x-movimento, y);
			x = x - movimento;
		break;
	}
}
		
				