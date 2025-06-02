// Estructuras de control nos permiten ejecutar codigo segun condiciones
//if = si?
let puntuacion = 85;

if (puntuacion >= 90){
    console.log("Aprobado con Excelencia");
}else if (puntuacion >= 70){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//switch 4
let mes = "Marzo";

switch (mes){
    case "Enero":
        console.log("Primer mes del año Enero");
        break;
    case "Febrero":
        console.log("Segundo mes del año Febrero");
        break;
    case "Marzo":
        console.log("Tercer mes del año Marzo");
        break;
    default:
        console.log("Otro mes")
        break;
}


// Bucles i=1
for (let i=0;i<=5;i++){
    console.log("Numero: ",i)
}

//While
let numero = 0;
while (numero<3){
    console.log("valor: ", numero);
    numero++;
}

