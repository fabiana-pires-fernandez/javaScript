let botao = document.getElementById("botao");
		
botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz( ){
	let numIteracoes = document.getElementById("numIteracoes").value;
	
	let resultado = document.getElementById("resultado");
	
	let numero = 1;
	while(numero <= numIteracoes){
		if(((numero % 5) == 0) && (numero % 3) == 0) {
		console.log("FizzBuzz");
		} else if ((numero % 3) == 0) {
		console.log("Fizz");
		} else if ((numero % 5) == 0) {
		console.log("Buzz");
		} else {
		console.log(numero);
		}					
		numero++;
	}
}
			