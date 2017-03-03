function cambiarPaddingElemento(elemento, padding){
	elemento.style.padding = padding;
}
function procesarTecla(elemento){
	alert(elemento.id);
}
var Calculadora = {
  init: function(){
		this.agrandarAchicarBotones("tecla");
		this.eventosTeclas();
  },
  achicarTecla: function(event){
		cambiarPaddingElemento(event.target, "1px");
  },
  restaurarTecla: function(event){
		cambiarPaddingElemento(event.target, "0px");
  },
  agrandarAchicarBotones: function(clase){
		var teclasCalculadora = document.getElementsByClassName(clase);
    for (var i = 0; i < teclasCalculadora.length; i++) {
      teclasCalculadora[i].onmousedown 	= this.achicarTecla;
      teclasCalculadora[i].onmouseup	= this.restaurarTecla;
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
		document.getElementById("on").onclick = this.procesoTecla;
		document.getElementById("sign").onclick = this.procesoTecla;
		document.getElementById("raiz").onclick = this.procesoTecla;

		document.getElementById("menos").onclick = this.procesoTecla;
		document.getElementById("mas").onclick = this.procesoTecla;
		document.getElementById("por").onclick = this.procesoTecla;
		document.getElementById("dividido").onclick = this.procesoTecla;
		
		document.getElementById("punto").onclick = this.procesoTecla;
		document.getElementById("igual").onclick = this.procesoTecla;

	}
}

Calculadora.init();
