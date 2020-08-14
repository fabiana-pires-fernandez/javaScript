let gTerra = 9.8;
let gMarte = 3.7;
let gJupiter = 24.8;
let peso = prompt("Digite o peso do objeto na terra");
let planeta = prompt("Qual planeta deseja saber o peso(Escolha entre marte ou júpiter)?");
let pesoFinal;

if (planeta == "marte") {
	pesoFinal = (peso / gTerra) * gMarte;
	document.write("O peso do objeto em marte é: " + pesoFinal);
} else if (planeta == "jupiter" || planeta == "júpiter") {
	pesoFinal = (peso / gTerra) * gJupiter;
	document.write("O peso do objeto em júpiter é: " + pesoFinal);
} else {
	document.write("Não posso calcular o peso nesse planeta");
}