let numeroMagico;

function comenzarJuego() {
  const botonIniciar = document.getElementsByClassName("boton-iniciar")[0];
  const titulo = document.getElementsByTagName("h1")[0];
  const formularioJuego = document.getElementById("formulario");
  numeroMagico = Math.floor(Math.random() * 101);
  if (botonIniciar) {
    botonIniciar.classList.add("d-none");
    titulo.textContent = "Se genero un numero magico, adivina entre 0 a 100!";
    formularioJuego.classList.remove("d-none");
  }
}

function adivinarNumero(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const numeroJugador = Number(input.value);
  const titulo = document.getElementsByTagName("h1")[0];
  const botonIniciar = document.getElementsByClassName("boton-iniciar")[0];
  const formularioJuego = document.getElementById("formulario");

  if (isNaN(numeroJugador)) {
    titulo.textContent = "Por favor, ingresá un número válido";
    return;
  }

  if (numeroJugador < 0 || numeroJugador > 100) {
    titulo.textContent = "El número debe estar entre 0 y 100";
    return;
  }

  if (numeroJugador === numeroMagico) {
    titulo.textContent = "Acertaste!";
    botonIniciar.classList.remove('d-none');
    botonIniciar.textContent = "Volver a jugar";
    formularioJuego.classList.add('d-none');
  } else if (numeroJugador > numeroMagico) {
    titulo.textContent = "Tu numero es mayor al numero magico";
  } else {
    titulo.textContent = "Tu numero es menor al numero magico";
  }

  input.value = "";
}

document.getElementById("formulario").addEventListener("submit", adivinarNumero);