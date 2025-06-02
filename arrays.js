//declarar un array

const numeros = [10,20,30,40,50,61,62]; 

//ForEach
numeros.forEach(numero => {
    console.log("Elemento: ", numero)
});

//map
const cuadrados = numeros.map(numero => {
    return numero*numero;
})
console.log("Cuadrados: ", cuadrados);

//filter
const pares = numeros.filter(numero => {
    return numero % 2 == 0;
});
console.log("Pares: ", pares);

//reduce
const sumaTotal = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log("SumaTotal: ", sumaTotal);