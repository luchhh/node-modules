const PI = Math.PI;

module.exports.areaCirculo = function(radio){
    return PI * radio * radio;
}

module.exports.perimetroCirculo = function(radio){
    return 2 * PI * radio;
}