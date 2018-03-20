var age = prompt("¿Cúal es tu edad?");
parseInt(age); //Pasando a Int una variable tipo String
//Convirtiendo edad a segundos
var ageInSeconds = age * 365 * 24 * 60 * 60;
 //Monstrando edad en document. write
 document.write("Tu edad es: "+ age + " y en segundos sería: "+ ageInSeconds);
