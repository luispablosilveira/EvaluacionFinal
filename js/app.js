function reducirTecla(elemento){
	elemento.setAttribute("style", "transform:scale(0.95,0.95)")
}
function aumentarTecla(elemento){
	elemento.setAttribute("style", "transform:scale(1,1)")
}
function procesarTecla(elemento){
	alert(elemento.id);
	/*
	var worker = new Worker('doHtml.js')
	worker.postMessage(elemento)
	worker.addEventListener('message', function(e){
		var result = e.data

		// Cargo el display
		var display = document.getElementById('display')
		display.innerHTML = result

		alert("Resultado : " + result)
		// Termino el worker
		worker.terminate()
	})
	*/
}
var Calculadora = {
	/*
	init: function(){
		var self = this
		var cero = document.getElementById("0")
		cero.addEventListener("click",function(){
			self.numero("0")
		})
		cero.addEventListener("mousedown", function(){
			cero.setAttribute("style","transform:scale(0.95,0.95)")
		})
		cero.addEventListener("mouseup", function(){
			cero.setAttribute("style","transform:scale(1,1)")
		})
	},
	*/

  init: function(){
		/*
		var self = this
		var numeroCero = document.getElementById("0")

		numeroCero.addEventListener("mousedown", function(){
			numeroCero.setAttribute("style","transform:scale(0.95,0.95)")
		})
		numeroCero.addEventListener("mouseup	", function(){
			numeroCero.setAttribute("style","transform:scale(1,1)")
		})
		*/
		this.agrandarAchicarBotones("tecla");
		//this.eventosTeclas();
  },

  achicarTecla: function(event){
		reducirTecla(event);
  },
  restaurarTecla: function(event){
		aumentarTecla(event);
  },
  agrandarAchicarBotones: function(clase){
		var teclasCalculadora = document.getElementsByClassName(clase);
		//var tecla;
		for (var i = 0; i < teclasCalculadora.length; i++) {
			var tecla = teclasCalculadora[i]

			tecla.addEventListener("mousedown", function(){
				tecla.setAttribute("style","transform:scale(0.95,0.95)")
			})

			tecla.addEventListener("mouseup", function(){
				tecla.setAttribute("style","transform:scale(1,1)")
			})

			/*
      teclasCalculadora[i].onmousedown 	= this.achicarTecla;
      teclasCalculadora[i].onmouseup		= this.restaurarTecla;
			*/
    }
  },
	procesoTecla: function(event){
		procesarTecla(event.target);
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
