var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
    
};

miAuto.detalleDelAuto();


//Funcion constructora (Para hacerlo más automático)

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
