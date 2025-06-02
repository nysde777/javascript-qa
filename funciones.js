//funciones nombradas
function calcularCuadrado(numero){
    return numero*numero;
}

let resultado = calcularCuadrado(2);
console.log(resultado);

let res2 = calcularCuadrado(10);
console.log("Res:",res2);


//funciones anonimas
let res3 = function(a,b){
    return a+b
}
console.log("Funcion anonima: ", res3(10,4));

//arrow function funcion flecha
const doblar = (numero) => {
    return numero*2;
}

let doble = doblar(20);
console.log("Funcion flecha: ", doble);

//funcion flecha mas concisa
const doblarConsiso = numero => numero * 2;
console.log("flecha concisa: ", doblarConsiso(2));