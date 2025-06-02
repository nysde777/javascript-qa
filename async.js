//Async/Await

function pedirDatosPromesa(url){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const datos = {producto: "hamburguesa", precio: 8};
            resolve(datos);
        },2000);
    });
}

async function obtenerDatos(){
    const datos = await pedirDatosPromesa("https://ejemplo.org");
    console.log("Recibir:", datos.producto, datos.precio)

}
