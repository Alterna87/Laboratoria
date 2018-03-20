//Preguntando nombre y apellido
var name = prompt("¿Cúal es tu nombre y apellido:");
//Obteniendo primera inicial
var firstInitial = name.slice(0,1);
//Obteniendo segunda inicial
var secondInitialPosition = name.indexOf(" ") +1;
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition +1);

//Mostrando resultados en el documento

document.write("Tus iniciales son: " +firstInitial.toUpperCase() + secondInitial.toUpperCase());

var prueba = '50' +1
document.write(prueba);
