//Manejo de errores con try/catch
function pedirDatosPromesa(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("No se pudo conectar a la APi");
        }, 2000);
    });
}

async function probarApi(){
    try {
        const datos = await pedirDatosPromesa("https://ejemplo.com");
        console.log("Datos:", datos);
    } catch(error) {
        console.log("Error capturado:", error);
    }
}

probarApi();