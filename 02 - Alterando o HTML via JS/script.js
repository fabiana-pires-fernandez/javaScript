// Quando o documento html carregar execute a função alterandoHTML
document.addEventListener("load", alterandoHTML());


function alterandoHTML() {
	// perguntando ao usuário uma cor e seu nome
	let cor = prompt("Escolha uma cor: rosa ou preto");
	let nome = prompt("Como você quer ser chamadx?");
	
	// alterando a cor de fundo de acordo com a escolha do usuário
	if(cor == "rosa") {
		document.body.style.backgroundColor = "pink";
	} else if (cor == "preto") {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";	
	} else {
		alert(":/ Infelizmente essa cor está indisponível.")
		document.body.style.backgroundColor = "gray";	
	}
	
	// se existir um id chamado adicionaTitulo guarde na variável titulo
	let titulo = document.getElementById("adicionaTitulo");
	
	// se não existir crie uma div com h1 concatenando o nome do usuário
	if(!titulo) {
		titulo = document.createElement("div");
		titulo.id = "adicionaTitulo";
		
		titulo.innerHTML = `<h1>Seja bem vindx, ${nome} </h1>`;		
		document.body.appendChild(titulo);		
	}
}
