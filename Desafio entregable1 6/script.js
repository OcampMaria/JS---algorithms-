// Por ejemplo: Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado.

// calcular costo total de productos y/o servicios seleccionados por el usuario.
// calcular pagos en cuotas sobre un monto determinado.
// calcular valor final de un producto seleccionado en funcion de impuestos y descuentos
// calcular tiempo de espera promedio en relacion a la cantidad de turnos registrados.
// calcular edad promedio de personas registradas
// calcular nota final de alumnos ingresados.

// ** incorpora algoritmo condicional (si <condicion>, entonces <operacion>)y algoritmo con ciclo (for while y do...while). utilizar funciones para realizar operaciones.

// Cuenta de Savings simulador interactivo.

// Arrays Earnings and Savings 
let earnings = [];
let savings = [];
let totalEarnings = 0;
let totalSavings = 0;

// let typeNumber = parseInt(prompt("Type amount"));

const amountToAdd = () => {
  for (let i = 1; i <= 5; i++) {
    earnings.push(prompt("Add amount #" + i));

    // map creates a new array. Number adds the number only
    earnings = earnings.map(Number);
  }
  console.log("amountToAdd function " + earnings);

  for (var i in earnings) {
    totalEarnings += earnings[i];
  }

  console.log("amountToAdd function " + totalEarnings);
  return totalEarnings;
};



const savingsToAdd = () => {
  for (let i = 1; i <= 3; i++) {
    savings.push(prompt("Add amount # " + i + "you want to add to savings"));

    savings = savings.map(Number);
  }
  console.log("savingsToAdd function " + savings);

  for (var i in savings) {
    totalSavings += savings[i];
  }
  console.log("savingsToAdd function " + totalSavings);
  return totalSavings;
};



function restar(a, b) {
  return a - b;
}

let resultado = restar(totalEarnings, totalSavings);
console.log(resultado);

// crear variable earning, crear variable savings, preguntar cuanto es el total, pregutnar cuanto quiere meter a savigns, restar el savigns del total. subir el total a earnings y subir el savings amount to savings variable.



// Hola! bienvenido a su cuenta de saldo. Para comenzar precione "ESC";

const bienvenido = () => {
  let entrada = prompt("Hola! bienvenido a su cuenta de saldo. Cual es tu nombre?");

  //Repetimos con While hasta que el usuario ingresa "ESC"
  while (entrada != "ESC") {
  
    totalEarnings = amountToAdd(earnings, totalEarnings);
    console.log("totalEarnings var : " + totalEarnings)

    totalSavings = savingsToAdd(savings, totalSavings);
    console.log("totalSavings var : " + totalSavings);

    

    alert(`Your total Earnings : ${totalEarnings}` );
    alert(`Your total Savings : ${totalSavings}`);

    break; 

  
  }
};
//

let welcome = prompt ("Welcome! Do you want to see your earnings and savings?")

const start = (e) => {
  if (welcome != "ESC") {
    bienvenido();
  } else {
   alert("Good Bye!")
  }
}

start()