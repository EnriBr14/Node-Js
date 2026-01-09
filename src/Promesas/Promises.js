//Forma base de una promesa
let promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
    //Comprobacion del valor de la consulta
        let solicitud = true;
        if(solicitud){
            resolve("Promesa ejecutada")
        }else{
            reject("No se ejecuto")
        }

    },3000)
})

//Metodos sobre las promesas
promesa.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))


