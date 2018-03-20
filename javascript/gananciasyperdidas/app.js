//Ingresos
var income = prompt("¿Cúanto es el ingreso:");
//costo
var costs = prompt("¿Cúanto es el costo: ");

//Porcentaje de impuestos

var taxPercent = prompt("¿Cúanto es el porcentaje(%) de impuestos:");

 // Ganancia bruta
var grossProfit = income - costs;

 //Obteniendo impuestos

 var tax = grossProfit * taxPercent / 100;

 // ganancia neta
 var netIncome = grossProfit - tax;

 //Mostrando ganancia neta

 document.write("Tu ganancia neta es $ " +netIncome);
