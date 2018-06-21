'use strict'

//require
// Hay tres tipos de require:
// Un tipo el cual es propio de node.
// Otra que no son nativos de Node, estos se importan  o se instalan
// Por ultimos los que nosotros creamos.

const fs = require('fs');
const colors = require('colors');

let data = '';


let listarTabla = (base,limite = 10) => {
    console.log(`=================================`.red);
    console.log(`========Tabla de ${base}===============`.red);
    console.log(`=================================`.red);

    for (let index = 1; index <= limite; index++){
        
        console.log( `${base} * ${index} = ${base * index }\n` );
    }
        
}



let crearArchivo = (base,limite=10) => {

        return new Promise((resolve,reject)=>{

            for (let index = 1; index <= limite; index++){
                    data += `${base} * ${index} = ${base * index }\n`;
            }

            fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => { 
                        if (err){
                            reject(err)     
                        }else{
                            resolve(`tabla-${base}.txt ha sido creado!`);
                        }
                        
            });

        });
     
}


module.exports = {
    crearArchivo,
    listarTabla
}