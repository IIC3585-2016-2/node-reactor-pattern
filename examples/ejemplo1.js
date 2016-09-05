"use strict";

const fs = require("fs");

// Definimos funcion de lectura.
var onRead = function(err, data) {
  if (err)
    return console.log(err);

  console.log("Asincrono: " + data.toString());
};

// 1. Ejecutaremos asincrono
fs.readFile('input.txt', onRead);

// 2. Ejecutamos sincrono
var data = fs.readFileSync('input.txt');
console.log("Sincrono: " + data.toString());
