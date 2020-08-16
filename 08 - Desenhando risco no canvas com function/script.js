// Pegar o elemento do html pelo id e declarando em uma variável
let canvas = document.getElementById('meu-canvas');

// Pedindo um papel para desenhar
// se em 2d declarar(x,y) e em 3d declarar (x,y,z)
let papel = canvas.getContext("2d");

// Definindo onde começar o risco
let x = 50;
let y = 50;

// Criando uma função para facilitar a crianção dos riscos
function desenho(cor, xInicial, yInicial, xFinal, yFinal) {
    papel.beginPath( );
    papel.strokeColor = cor;
    papel.lineWidth = 3;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke( );
    papel.closePath( );
}

// papel.beginPath -> Informando o início do risco
// papel.strokeColor -> Definindo cor do risco
// papel.lineWidth -> Definindo espessura do risco
// papel.moveTo -> Riscando o canvas
// papel.lineTo -> Definindo o final do risco
// papel.stroke -> Definindo o desenho
// papel.closePath -> Informando final do desenho

// Chamando a função e passando parâmetros para fazer os riscos
desenho("red", x, y, 200, 200);
desenho("white", x, 300+y, 400, 400);


