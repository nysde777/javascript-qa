//promesas 
function pedirDatosPromesa(url){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const datos = {producto: "hamburguesa", precio: 8};
            resolve(datos);
        },2000);
    });
}

pedirDatosPromesa("https://ejemeplo.com")
    .then((datos)=>{
        console.log("recibi:", datos.producto, datos.precio);
    })
    .catch((error)=>{
        console.log("Error:", error);
    });