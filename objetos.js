//Objetos
const usuario = {
    nombre: "Sofia",
    edad: 28,
    ciudad: "Lima",
    presentarse: function(){
        return `Hola soy ${this.nombre} de ${this.ciudad}`;
    }
}

usuario.nombre = "Lucas"
console.log("Nombre: ", usuario.nombre);
console.log("Nombre: ", usuario.edad);
console.log("Nombre: ", usuario.ciudad);
console.log(usuario["ciudad"]);
console.log(usuario.presentarse());
usuario.ocupacion = "Arquitecto";
console.log("Ocupacion: ", usuario.ocupacion);