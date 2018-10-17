const PI = Math.PI;

var areaCirculo = function(radio){
    return PI * radio * radio;
}

var perimetroCirculo = function(radio){
    return 2 * PI * radio;
}

module.exports.areaCirculo = areaCirculo;
module.exports.perimetroCirculo = perimetroCirculo;