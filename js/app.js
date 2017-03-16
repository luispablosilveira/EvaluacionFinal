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
			alert("Numero");
			break;

		case 'on':
			alert("on");
			break;

		case 'sign':
			alert("sign");
			break;

		case 'menos':
		case 'mas':
		case 'por':
		case 'dividido':
			alert("Operador");
			break;


		case 'punto':
				alert("punto");
				break;

		case 'igual':
			alert("igual");
			break;

		default:
			break;
	}
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
/*
var calculadora = {
	init: function(){
		var self = this
		var cero = document.getElementById("0")
		cero.addEventListener("click",function(){
			self.numero("0")
		})
		cero.addEventListener("mousedown", function(){
			cero.setAttribute("style","transform:scale(0.95,0.95)")
		})
		cero.addEventListener("mouseout", function(){
			cero.setAttribute("style","transform:scale(1,1)")
		})
	}
*/
