// crea algoritmo que solicite al usuario uno o mas valores ingresados por prompt(), compare las entradas y , en funcion de ciertas condiciones, muestre por consola o alert () el resultado segun los valores ingresados y las condiciones cumplidas

// pedir un numero mediante prompt y si es mayor a 1000 mostrar un alert 
let numeroIngresado = prompt("ingresar numero"); 

if (numeroIngresado <= 1000) {
    alert ("El numero ingresado muy pequeno")
} else {
    alert ("El numero ingresado mayor a 1000!!")
}

//  pedir un texto mediante prompt y si es igual a "hola" mostrar un alerta o consola
let string1 = prompt("ingresar texto")

if (string1 === "hola") {
    alert ("Hola amigo!")
} else {
    alert("Quien eres?")
}
