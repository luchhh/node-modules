const PI = Math.PI;

Geometria = {};

Geometria.areaCirculo = function(radio){
    return PI * radio * radio;
}

Geometria.perimetroCirculo = function(radio){
    return 2 * PI * radio;
}

module.exports = Geometria;