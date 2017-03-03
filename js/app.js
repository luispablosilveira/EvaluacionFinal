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

  /*,
  cambiarComportamientoBotones: function(claseBotones){
    var botonesPagina = document.getElementsByClassName(claseBotones);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmouseover = this.eventoColorBotones;
      botonesPagina[i].onmouseout = this.eventoRetornarColorBotones;
    }
  },
  eventoColorBotones: function(event){
    cambiarColorFondo(event.target);
  },
  eventoRetornarColorBotones: function(event){
    restaurarColorFondo(event.target);
  },
  eventoMostrarContenido: function(event){
    mostrarContenido(event.target);
  },
  eventoAddTexto: function(event){
    agregarParrafo(event.target);
  },
  asignarEventoMostrar: function(){
    var bloques = document.querySelectorAll("[class^='item-']");
    for (var i = 0; i < bloques.length; i++) {
      bloques[i].onclick = this.eventoMostrarContenido;
      bloques[i].ondblclick = this.eventoAddTexto;
    }
  },
  eventoSonido: function(event){
    alert(event.which);
    if (event.which==48) {
      desactivarSonido();
    }else if (event.which==57) {
      activarSonido();
    }
  }
  */
}

Calculadora.init();
