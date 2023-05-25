numAleatorio = Math.floor(Math.random() * 100) + 1;
	
pontos = 100	
function verifica(){
	num = document.getElementById("num").value;
	num= parseFloat(num);
	
	if (numAleatorio < num ){
		pontos = pontos - 1
		var texto = document.getElementById(num);
		num.innerHTML = "Resposta errada, Você ainda tem " + pontos "tentativas:)";
	}
	
	else if(numAleatorio > num ){
		pontos = pontos - 1
		var texto = document.getElementById(num);
		num.innerHTML = "Resposta errada, Você ainda tem " + pontos "tentativas:) ";
	}
	
	else if(numAleatorio == num){
		var texto = document.getElementById(num);
		num.innerHTML = "Parabéns você acerotu!";
	}
}

function novoJogo (){
	
	
}
	                                                                                                                      