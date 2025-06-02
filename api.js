//Json 
const datos = {
    id: 1, 
    nombre: "Juan",
    habilidades: ["javascript", "Python", "Rails"],
    activo: true
}

const jsonString = JSON.stringify(datos);
console.log("JSON: ", jsonString);

const objeto = JSON.parse(jsonString);
console.log("Nombre del json:", objeto.nombre);

async function obtenerDatosAPI(){
    const respuesta = {
        status: 200,
        data: JSON.stringify({
            usuario: "Ana",
            rol: "QA"
        })
    };

    const datosAPI = JSON.parse(respuesta.data);
    console.log("usuario desde API: ", datosAPI.usuario);
}

obtenerDatosAPI();