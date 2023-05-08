//Este codigo continua con las funciones y validaciones de los datos ingresados en el formulario como lo son el nombre, la edad, la nacionalidad

// Se selecciona el formulario
var formulario = document.querySelector("#form");

// Cuando se activa el formulario, prevenir que se envíe antes de procesar la información
formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtenemos los elementos del formulario
  var nombreElemento = formulario.elements.name;
  var edadElemento = formulario.elements.age;
  var nacionalidadElemento = formulario.elements.nationality;

  // Obtenemos los valores de los elementos del formulario
  var nombre = nombreElemento.value;
  var edad = edadElemento.value;
  var nacionalidad = nacionalidadElemento.options[nacionalidadElemento.selectedIndex].value;

  console.log(nombre, edad, nacionalidad)

  // Validación del nombre
  if (nombre.length === 0) {
    nombreElemento.classList.add("error");
    return; // Detener la ejecución de la función si el nombre está vacío
  } else {
    nombreElemento.classList.remove("error");
  }

  // Validar la edad
  var edadValida = parseInt(edad) >= 18 && parseInt(edad) <= 120;
  if (!edadValida) {
    edadElemento.classList.add("error");
    return; // Detener la ejecución de la función si la edad no es válida
  } else {
    edadElemento.classList.remove("error");
  }

  // Convertir la abreviatura al nombre completo
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
  }

  // Agrega el invitado a la lista
  agregarInvitado(nombre, edad, nacionalidad);

  // Limpia el formulario
  formulario.reset();
});

// Función para agregar un invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Obtiene la lista de invitados
  var lista = document.getElementById("lista-invitados");

  // Crea un elemento para el invitado
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");

  // Crea elementos para mostrar la información del invitado
  var nombreSpan = document.createElement("span");
  var edadSpan = document.createElement("span");
  var nacionalidadSpan = document.createElement("span");

  // Agrega la información del invitado a los elementos
  nombreSpan.textContent = "Nombre: " + nombre;
  edadSpan.textContent = "Edad: " + edad;
  nacionalidadSpan.textContent = "Nacionalidad: " + nacionalidad;

  // Agrega los elementos a la lista
  elementoLista.appendChild(nombreSpan);
  elementoLista.appendChild(edadSpan);
  elementoLista.appendChild(nacionalidadSpan);
  lista.appendChild(elementoLista);

  // Crea un botón para eliminar el invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";

  // Agrega el botón a la lista
  elementoLista.appendChild(botonBorrar);

  // Agrega un listener al botón para eliminar el invitado al hacer clic
  botonBorrar.addEventListener("click", function() {
    lista.removeChild(elementoLista);
  });
}

// Selecciona el formulario y la lista de invitados en el DOM
const form = document.getElementById("form");
const listaInvitados = document.getElementById("lista-invitados");

// Función que se ejecuta al hacer click en el botón "Enviar"
function agregarInvitado() {
  // Obtiene los valores del formulario
  const nombre = document.getElementById("name").value;
  const edad = document.getElementById("age").value;
  const nacionalidad = document.getElementById("nationality").value;

  // Crea un nuevo elemento <p> con la información del invitado
  const nuevoInvitado = document.createElement("p");
  nuevoInvitado.innerHTML = `Nombre: ${nombre}, Edad: ${edad}, Nacionalidad: ${nacionalidad}`;

  // Añade el nuevo elemento <p> a la lista de invitados
  listaInvitados.appendChild(nuevoInvitado);

  // Limpia el formulario
  limpiarFormulario();
}

// Función que se ejecuta al hacer click en el botón "Limpiar"
function limpiarFormulario() {
  form.reset();
}

