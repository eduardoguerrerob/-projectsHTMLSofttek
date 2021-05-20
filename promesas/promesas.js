// Una promesa puede tener estado
//- Pendiente   - pending
//- Resuelta    - resolve
//- Rechazada   - reject

// existe la clase js que se llama Promise
// new Promise

let promesa1 = new Promise((resolve, reject) => {
    console.log("Promesa ejecutandose ... pending");

    setTimeout(function () {
        // tarea
        resolve("Promesa resuelta");
    }, 6000);

    setTimeout(function () {
        // tareacd ..
        reject("Promesa rechazada");
    }, 4000);
})

// invocar la promesa
promesa1.then((response) => {
    console.log("Ejecución de la promesa: " + response);
}).catch((error) => {
    console.log("Error al ejecutar la promesa: " + error);
});

console.log("Hola compañeros");