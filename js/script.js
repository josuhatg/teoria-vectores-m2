// comentario en linea 

/* 
comentario en bloque 
*/

// Como se inicializa un vector 
// Inicializar vacio
let vector = [];

// inicializar un vector con informacion
let numeros = [9, 10, 22, 3, 4, 11, 50, 99];

let nombre = ["Brandon", "Alexa", "siri"];

let logicos = [true, false, true, true];

// Como se muestra la informacion de un vector
// Mostrar todo el vector 
console.log (numeros);
console.log (nombre);
console.log (logicos);

// Mostrar un valor en especifico
console.log (numeros [6]);
console.log (nombre [2]);
console.log (logicos [3])

//Como recorremos un vector 
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros [i])
}
for(let i = 0; i < nombre.length; i++) {
    console.log(nombre [i])
}
for(let i = 0; i < logicos.length; i++) {
    console.log(logicos [i])
}

//como agrega numeros a un vector
numeros.push(300, 500, 100);
console.log(numeros);

nombre.push("Laura", "Martin");
console.log(nombre);

logicos.push(false, true);
console.log(logicos)

//Como eliminar un vector 
// pop() elimina el ultimo dato
numeros.pop();
console.log(numeros);

//splice(posicion_inicial, cantidad_datos_a_borrar)
numeros.splice(3,1)
console.log(numeros);