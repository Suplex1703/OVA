// Función para comenzar el curso
function comenzarCurso() {
  var seccionIntro = document.getElementById("intro");
  var seccionTaller1 = document.getElementById("taller1");
  var leccion1 = document.getElementById("leccion1");
  var btnSiguiente = document.getElementById("siguienteBtnTaller1");

  seccionIntro.style.display = "none";
  seccionTaller1.style.display = "block";
  leccion1.style.display = "block";
  btnSiguiente.style.display = "block";
}

// Función para mostrar la siguiente sección y ocultar la actual
function mostrarSiguiente(idSiguiente) {
  var seccionActual = document.querySelector(".actividad");
  var siguienteSeccion = document.getElementById(idSiguiente);

  seccionActual.style.display = "none";
  siguienteSeccion.style.display = "block";
}

// Función para mostrar una lección específica
function mostrarLeccion(idLeccion) {
  var leccion = document.getElementById(idLeccion);
  var btnSiguiente = document.getElementById("siguienteBtnTaller1");

  leccion.style.display = "block";
  btnSiguiente.style.display = "block";
}

function volverInicio() {
  window.location.href = "#intro";
}