Cuadrado = function(ancho){
    this.ancho = ancho;
}

Cuadrado.prototype.area = function(){
    return this.ancho * this.ancho;
}

module.exports = Cuadrado;