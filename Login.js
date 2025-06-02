function verificar() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    var mensaje = document.getElementById("mensaje");
  
    if (usuario === "admin" && clave === "1234") {
      window.location.href = "Main.html";
    } else {
      mensaje.innerText = "Usuario o contraseña incorrectos.";
      mensaje.style.color = "red";
    }
  }
  