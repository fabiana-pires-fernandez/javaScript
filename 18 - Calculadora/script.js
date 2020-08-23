/* function que faz com que ao clicar apareca os numeros e simbolos na tela 
	da calculadora */
function insert(num) {
	document.form.textview.value += num;
}

/* function que aciona o funcionamento do sinal = */
function equal() {
	let exp = document.form.textview.value;
	
	if(exp) {
		document.form.textview.value = eval(exp)	
	}
}

/* function que aciona o funcionamento de apagar tudo */
function clean() {
	document.form.textview.value = " ";
}

/* function que aciona o funcionamento do botao voltar < */
function back() {
	let exp = document.form.textview.value;
	
	document.form.textview.value = exp.substring(0, exp.length - 1);
}