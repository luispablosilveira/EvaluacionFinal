var display = document.getElementById("display");

var numeroUno					= "";
var operadorEjecutado	= "";
var numeroDos					= "";
var resultado					= "";
var ultimoDigitado		= "";

var valorUno 		= "";
var valorDos 		= "";
var operadorEje = "";

function reducirTecla(elemento){
	elemento.setAttribute("style", "transform:scale(0.95,0.95)")
}
function aumentarTecla(elemento){
	elemento.setAttribute("style", "transform:scale(1,1)")
}
function procesarTecla(elemento){
	switch(elemento.id){
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			numero(elemento.id);
			break;

		case 'on':
			on();
			break;

		case 'sign':
			signo();
			break;

		case 'menos':
			operador("-");
			break;

		case 'mas':
			operador("+");
			break;

		case 'por':
			operador("*");
			break;

		case 'dividido':
			operador("/");
			break;

		case 'punto':
			punto();
			break;

		case 'igual':
			igual();
			break;

		default:
			break;
	}

	ultimoDigitado = elemento.id;
}
function numero(valor){
		// Si es 0 cargo el valor
		if (display.innerHTML == "0"){
			display.innerHTML = valor;
		}else{
			// Si no es 0, me fijo que el largo no sea superior a 8
			if (display.innerHTML.length < 8){
				display.innerHTML += valor;
			}
		}
}
function on(){
	inicializoValores();
	display.innerHTML = "0";
}
function punto(){
	// Si no tiene punto y el largo es menor que 8 agrego el punto
	if (display.innerHTML.indexOf(".") == -1){
		display.innerHTML += ".";
	}
}
function signo(){
	if (display.innerHTML != "0"){
		var valor = display.innerHTML;
		if (valor.substring(0, 1) == '-'){
			display.innerHTML = valor.substring(1, (valor.length));
		}else{
			display.innerHTML = '-' + valor;
		}
	}
}
function operador(oper){
	if (numeroUno != "" || display.innerHTML != "0"){
		// No se puede haber ejecutado un operador anteriormente
		if (operadorEjecutado == ""){
			numeroUno 				= display.innerHTML;
			operadorEjecutado = oper;
			display.innerHTML = "";
		}
		else{
			alert("Esta digitando el segundo numero, solo se acepta el igual o limpiar");
		}
	}
}

function igual(){
	// Paso los valores para variables auxiliares y limpio las variables actuales
	if (ultimoDigitado == "igual"){
			calcularResultado();
	}else{
		if (numeroDos == ""){
			numeroDos = display.innerHTML;
		}
		calcularResultado();
	}
	display.innerHTML = resultado;

	inicializoValores();
}
function calcularResultado(){
	if (ultimoDigitado == "igual"){
		// Utilizo los mismos valores actuales
	}
	else{
		// Cargo los nuevos valores
		valorUno 		= numeroUno;
		valorDos 		= numeroDos;
		operadorEje = operadorEjecutado;
	}

	var error = "N";
	switch(operadorEje){
		case '+':
			resultado = parseFloat(valorUno) + parseFloat(valorDos);
			break;

		case '-':
			resultado = parseFloat(valorUno) - parseFloat(valorDos);
			break;

		case '*':
			resultado = parseFloat(valorUno) * parseFloat(valorDos);
			break;

	  case '/':
			if (numeroDos != "0"){
				resultado = parseFloat(valorUno) / parseFloat(valorDos);
			}else{
				error = "S";
				alert("No se puede dividir entre 0");
			}
			break;

		default:
		error = "S";
			break;
	}
	if (error == "N"){
		var strResultado = resultado.toString();
		if (strResultado.length >= 8){
			resultado = strResultado.substring((strResultado.length - 8));
		}
		valorUno = resultado;
	}
}
function inicializoValores(){
	numeroUno					= "";
	operadorEjecutado	= "";
	numeroDos					= "";
	resultado					= "";
}

var Calculadora = {
	init: function(){

		// Busco las teclas, y a cada uno le asocio los eventos que necesito
		var teclasCalculadora = document.getElementsByClassName("tecla");

		for (var i = 0; i < teclasCalculadora.length; i++) {
			var tecla = teclasCalculadora[i]

			tecla.addEventListener("mousedown", function(){
				reducirTecla(this)
			})

			tecla.addEventListener("mouseup", function(){
				aumentarTecla(this);
			})

			tecla.addEventListener("click", function(){
				procesarTecla(this);
			})
    }
  },
	eventosTeclas: function(){
		// Proceso las teclas numéricas
		document.getElementById("0").onclick = this.procesoTecla;
		document.getElementById("1").onclick = this.procesoTecla;
		document.getElementById("2").onclick = this.procesoTecla;
		document.getElementById("3").onclick = this.procesoTecla;
		document.getElementById("4").onclick = this.procesoTecla;
		document.getElementById("5").onclick = this.procesoTecla;
		document.getElementById("6").onclick = this.procesoTecla;
		document.getElementById("7").onclick = this.procesoTecla;
		document.getElementById("8").onclick = this.procesoTecla;
		document.getElementById("9").onclick = this.procesoTecla;

		// Proceso las funciones
		document.getElementById("on").onclick 	= this.procesoTecla;
		document.getElementById("sign").onclick = this.procesoTecla;
		document.getElementById("raiz").onclick = this.procesoTecla;

		document.getElementById("menos").onclick 		= this.procesoTecla;
		document.getElementById("mas").onclick 			= this.procesoTecla;
		document.getElementById("por").onclick 			= this.procesoTecla;
		document.getElementById("dividido").onclick = this.procesoTecla;

		document.getElementById("punto").onclick 		= this.procesoTecla;
		document.getElementById("igual").onclick 		= this.procesoTecla;

	}

}

Calculadora.init();
