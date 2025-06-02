let x = 20;
let y = 4;


//suma
let suma = x + y;
console.log(suma)

//resta
let resta = x - y;
console.log(resta)

//multiplicacion 
let multi = x * y;
console.log(multi);

//division
let division = x / y;
console.log(division);

//modulo
let modulo = x % y;
console.log(modulo);

//Operadores logicos and or not
let tienePermiso = true;
let esDiaLaboral = false;

//AND verdadero si ambos son verdaderos
let puedeTrabajar = tienePermiso && esDiaLaboral;
console.log("AND:", puedeTrabajar);

//OR verdadero si uno al menos es verdadero
let puedeEntrar = tienePermiso || esDiaLaboral;
console.log("OR:", puedeEntrar);

//NOT invierte un valor
let notTienePermiso = !tienePermiso;
console.log("NOT:", notTienePermiso);

//Operadores de comparacion
let a = 5;
let b = "5";
let c = 10;

//igualdad compara valores pero ignora el tipo
let igual = a == b;
console.log("Igualdad ==", igual)

//igualdad estricta comparar valor y tipo
let estrictamenteIgual = a === b;
console.log("Igualdad estricta === ",estrictamenteIgual)

//Desigualdad verifica si son diferentes
let diferente = a != b;
console.log("Desigualdad !=", diferente);

//Mayor igual o menor igual 
let mayorIgual = c <= a;
console.log("Igualdad mayor menor: ", mayorIgual);
