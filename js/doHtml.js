self.addEventListener("message", function(e){
  var elemento = e.data
  var result = elemento.id
  self.postMessage(result)
})
