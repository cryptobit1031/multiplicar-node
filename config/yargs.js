'use strict'

const opts = {
    base: {
            demand: true,
            alias: 'b'
        },        
        limite: {
            alias: 'l',
            dafault: 10 
        }      
}

const argv = require('yargs')
    .command('listar','Imprime en sonsola la tabla de multiplicar',opts)
    .command('crear','Genera un archivo con la table de multiplicar',opts)            
    .help()
    .argv;


module.exports = {
    argv
}