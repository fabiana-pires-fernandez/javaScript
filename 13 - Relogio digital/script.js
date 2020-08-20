const relogioDigital = document.getElementById('relogio');

 const updateClock = () => {
	 const present = new Date(); 
	 const horas = present.getHours();
	 const minutos = present.getMinutes();
	 const segundos = present.getSeconds();
	 
	 const relogioHTML = `
		<span>${String(horas).length === 1 ? `0${horas}` : horas}</span> :
		<span>${String(minutos).length === 1 ? `0${minutos}`: minutos}</span> :
		<span>${String(segundos).length === 1 ? `0${segundos}`: segundos}</span>
	`
	 
	 relogioDigital.innerHTML = relogioHTML;
 }
 
 setInterval(updateClock, 1000);