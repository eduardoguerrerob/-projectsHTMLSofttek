//const hola = "hola mundo desde el modulo saludos";

//module.exports = hola;


function saludar(nombre) {
    console.log("Hola " + nombre);
}

function despedirse(nombre) {
    console.log("Chao " + nombre);
}

module.exports = {
    salu: saludar,
    despedirse
};
