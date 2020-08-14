// Apresentando na tela uma mensagem perguntando ao usuário o seu nome e salvando o nome na variável nome
let nome = prompt("Digite seu nome");

// Apresentando na tela uma mensagem perguntando ao usuário o seu peso e salvando o nome na variável peso
// a função parseFloat() analisa um argumento string e retorna um número de ponto flutuante.
let peso = parseFloat(prompt("Digite seu peso"));

// Apresentando na tela uma mensagem perguntando ao usuário sua altura e salvando o nome na variável altura
// a função parseFloat() analisa um argumento string e retorna um número de ponto flutuante.
let altura = parseFloat(prompt("Digite sua altura em cm"));

// variável guarda os valores que são retornados da função calcularImc
let imc = calcularImc(altura/100, peso);

// variável recebe o valor de imc que foi retornado da função classificarImc e guarda o valor na variável classificacao
let classificacao = classificarImc(imc);


// Função que recebe dois parametros a altura e o peso, e retorna o valores calculando peso dividido por altura vezes altura
function calcularImc(altura, peso) {
	return peso / (altura * altura)
}

// Função que recebe o valor de imc e classifica-o retornando uma mensagem 
function classificarImc(imc) {
	// se imc menor que 16 retorna "baixo peso muito grave"
	if (imc < 18.59) {
		return "baixo peso"
	} else if (imc >= 18.60 && imc <= 24.99) {
		return "peso normal"
	} else if (imc >= 25.00 && imc <= 29.99) {
		return "sobrepeso"
	} else if (imc >= 30.00 && imc <= 34.99) {
		return "obesidade grau I"
	} else if (imc >= 35.00 && imc <= 39.99) {
		return "obesidade grau II"
	} else {
		return "obesidade grau III"
	}
}

// Apresenta na tela o nome da pessoa com seu imc e classificação
document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como\n" + classificacao + ".");

