// Por ejemplo: Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado.

// Cuenta de Savings simulador interactivo.

// Arrays Earnings and Savings
let earnings = [];
let savings = [];
let totalEarnings = 0;
let totalSavings = 0;



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




// Hola! bienvenido a su cuenta de saldo. Para comenzar precione "ESC";

const bienvenido = () => {
  let entrada = prompt(
    "Hola! bienvenido a su cuenta de saldo. Cual es tu nombre?"
  );

  //Repetimos con While hasta que el usuario ingresa "ESC"
  while (entrada != "ESC") {
    totalEarnings = amountToAdd(earnings, totalEarnings);
    console.log("totalEarnings var : " + totalEarnings);

    totalSavings = savingsToAdd(savings, totalSavings);
    console.log("totalSavings var : " + totalSavings);

    alert(`Your total Earnings : ${totalEarnings}`);
    alert(`Your total Savings : ${totalSavings}`);

    break;
  }
};



// Metodos de busqueda y filtrados sobre array
// crear objetp con earnings and savings, then send to an array.
// ya en el array agregar mas objetos. cuando tengamos dos o tress objetos, eliminar el ultimo para editar!! :o... Quieres Editar? si, reescribir datos y eliminar el ultimo before that one.

//usar indexOf() para devolver lista de todas las entradas que hemos hecho.
//necesito un botton para comenzar y otro para ver lista de savings and otra para lista de savings realizados. Page 35 under arrqays

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const simulador = document.getElementById('simulador')


btn1.addEventListener('click', (e) => {
  bienvenido();
// DOM - append savings and earnings to html
earnings.forEach((earning) => {
  const div = document.createElement("div");
  div.innerHTML = `<h4> earning: ${earning}</h4> `;

  simulador.append(div);
});

savings.forEach((saving) => {
  const div = document.createElement("div");

  div.innerHTML = `<h4>saving: ${saving}</h4> `;

  simulador.append(div);
});

})

