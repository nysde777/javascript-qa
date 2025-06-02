//Callbacks
function pedirDatos(url, callback){
    setTimeout(()=>{
        const datos = {producto: "pizza", precio: 10};
        callback(datos);
    }, 2000);
}

pedirDatos("https://ejemplo.com", (datosRecibidos) =>{
    console.log("recibi:", datosRecibidos.producto, datosRecibidos.precio);
})