function caixaBaixa() {
	let caixabaixa = document.getElementById("meu-texto").value;
	document.getElementById("meu-texto").value = caixabaixa.toLowerCase();
}

document.getElementById('caixa-baixa').addEventListener('click', caixaBaixa);

function caixaAlta() {
	let caixaalta = document.getElementById("meu-texto").value;
	document.getElementById("meu-texto").value = caixaalta.toUpperCase();
}

document.getElementById("caixa-alta").addEventListener('click', caixaAlta);
