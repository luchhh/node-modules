const geo = require("./geometria");
const geo2 = require("./geometria2");
const geo3 = require("./geometria3");
const Cuadrado = require("./cuadrado");

var radio = 1;
console.log("El área de un círculo de radio "+radio+" es: "+geo.areaCirculo(radio));

console.log("El perímetro de un círculo de radio "+radio+" es: "+geo2.perimetroCirculo(radio));

console.log("El perímetro de un círculo de radio "+radio+" es: "+geo3.perimetroCirculo(radio));

var miCuadrado = new Cuadrado(2);
console.log("El área de un cuadrado de ancho "+miCuadrado.ancho+" es: "+miCuadrado.area());