/* Asigno valor del ticket */
const precio = 200;

/* Obtengo los elementos del form */
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");
let totalAPagar = document.getElementById("totalAPagar");
const btnResumen = document.getElementById("btnResumen");
const btnBorrar = document.getElementById("btnBorrar");

 //calculo total a pagar
function calcularTotalAPagar(){
  //Verifico que los campos no estén vacíos y sean válidos
  if (nombre.value === "" || /^\s+$/.test(nombre.value) || !isNaN(nombre.value)) {
    alert("Debe ingresar su Nombre.");
    nombre.focus();
    return;
  }

  if (apellido.value === "" || /^\s+$/.test(apellido.value) || !isNaN(apellido.value)) {
    alert("Debe ingresar su Apellido.");
    apellido.focus();
    return;
  }

  if (mail.value === "" || /^\s+$/.test(mail.value) || !(/\S+@\S+\.\S+/.test(mail.value))) {
    alert("Debe ingresar su Mail.");
    mail.focus();
    return;
  }

  // Verifico que hay ingresado cantidad de tickets
  if (cantidadTickets.value == "") {
    alert("Debe ingresar cantidad de tickets.");
    cantidadTickets.focus();
    return;
  }

  // Verifico que haya seleccionado una categoría
  if (categoria.value == "") {
    alert("Debe seleccionar una categoría.");
    categoria.focus();
    return;  
  }

  //asigno descuento según categoría
  let monto = 0;
  if (categoria.value == 0) {
    monto = parseInt(cantidadTickets.value) * (precio * 0.2);
  } else if (categoria.value == 1) {
      monto = parseInt(cantidadTickets.value) * (precio * 0.5);
   } else { 
      monto = parseInt(cantidadTickets.value) * (precio * 0.85);
   }  
  totalAPagar.innerHTML = monto;
}

// Botón Resumen calcula Total a pagar
btnResumen.addEventListener("click", calcularTotalAPagar);

// Función para borrar el valor
function resetTotalAPagar() {
   totalAPagar.innerHTML = "";
}

//Botón Borrar borra total a pagar
btnBorrar.addEventListener("click", resetTotalAPagar);
