//variable global
let globalVar = "Soy global";

function mostrarVariables(){
    let funcionVar = "Soy una funcion";

    if(true){
        let bloqueVar = "Soy un bloque";
        console.log("Dentro del bloque: ", globalVar, funcionVar, bloqueVar);
        
    }
}

console.log(globalVar);
mostrarVariables();


//closures
function crearContador(){
    let contador = 0;

    return function incrementar(){
        contador++;
        return contador;
    }
}

const miContador = crearContador();
console.log(miContador());
console.log(miContador());
console.log(miContador());
console.log(miContador());