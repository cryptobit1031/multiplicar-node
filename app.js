'use strict'


const argv = require('./config/yargs').argv;

const color = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite);           
        break;

    case 'crear':
        crearArchivo(argv.base,argv.limite).then(archivo => console.log(`Archivo creado: ${ color.green(archivo) }`));      
        break;

    default:
        console.log('Comando no reconocido');    
    
}






    