function Enviar() {
    var nombre = document.getElementById("nombre").value;
    var patente = document.getElementById("patente").value;
    var anioCompra = parseInt(document.getElementById("anioCompra").value);
    var anioActual = parseInt(document.getElementById("anioActual").value);
    var resultado = document.getElementById("resultado");
  
   
    var diferencia = anioActual - anioCompra;
  
    if (diferencia < 2) {
      resultado.innerText = "Todavía no te corresponde hacer la ITV.";
      resultado.style.color = "orange";
      return;
    }
  
    var ultimoNumero = -1;
    for (var i = 0; i < patente.length; i++) {
      var caracter = patente[i];
      if (caracter >= "0" && caracter <= "9") {
        ultimoNumero = parseInt(caracter);
      }
    }
  
  
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                 "Julio", "Agosto", "Septiembre", "Octubre"];
  
    var mesAsignado = meses[ultimoNumero] || "Noviembre/Diciembre";
  
    resultado.innerText = nombre + ", te sugerimos hacer la ITV en el mes de " + mesAsignado + ".";
    resultado.style.color = "#2c3e50";
  }
  
  
  
  