
// Pegar o elemento do html pelo id e declarando em uma variável
let canvas = document.getElementById("meu-canvas");

// Pedindo um papel para desenhar
// se em 2d declarar(x,y) e em 3d declarar (x,y,z)
let papel = canvas.getContext("2d");

// Definindo onde começar o risco
let x = 50;
let y = 50;

// Informando o início do risco
papel.beginPath( );

// Definindo cor do risco
papel.strokeStyle = 'red';

// Definindo espessura do risco
papel.lineWidth = 3;

// Riscando o canvas 
papel.moveTo(x, y);

// Definindo o final do risco
papel.lineTo(400, 400);

// Definindo desenho
papel.stroke( );

// Informando final do desenho
papel.closePath( );
	