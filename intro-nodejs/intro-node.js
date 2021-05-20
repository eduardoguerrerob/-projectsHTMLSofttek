// Node JS es un entorno de ejecución para JS del lado del servidor

//const { saludar } = require("./modulos/saludos");

// npm (node package management)  manejador de paquetes

// node no puede interactuar con el DOM

//console.log("hola mundo");

//const saludos = require("./modulos/saludos");

//saludos.saludar("Jeannette");
//saludos.despedirse("Jeannette");

const { salu, despedirse } = require("./modulos/saludos");

salu("Mao");
despedirse("Mao");