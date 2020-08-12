class Figura {
	
	constructor(nome, pais, posicao, urlImagem) {
		this.nome = nome;
		this.pais = pais;
		this.posicao = posicao;
		this.imagem = new Image(320, 400);
		this.imagem.src = urlImagem;
	}
	
	exibir () {
		document.body.appendChild(this.imagem);
		document.write("<br />Nome: " + this.nome + "<br />");
		document.write("País: " + this.pais + "<br />");
		document.write("Posição: " + this.posicao + "<hr>");
	}
}

let cris = new Figura("Cris", "Brasil", "Atacante", "./imgs/cris.jpeg");
let marta = new Figura("Marta", "Brasil", "Meio campo", "./imgs/marta.jpg");
let debinha = new Figura("Debinha", "Brasil", "Atacante", "./imgs/debinha.jpg");
let formiga = new Figura("Formiga", "Brasil", "Atacante", "./imgs/formiga.jpeg");
let thais = new Figura("Thais", "Brasil", "Atacante", "./imgs/thais.jpg");
let colecaoFigura = [];

colecaoFigura.push(cris);
colecaoFigura.push(marta);
colecaoFigura.push(debinha);
colecaoFigura.push(formiga);
colecaoFigura.push(thais);

for (let i = 0; i<colecaoFigura.length; i++){
	colecaoFigura[i].exibir();
}