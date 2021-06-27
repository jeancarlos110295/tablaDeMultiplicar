const argv = require('yargs')
        .option({
            'b' : {
                alias : "base",
                type : 'number',
                describe: 'Crear la tabla de multiplicar según su base',
                demandOption : true
            },
            'l' : {
                alias : 'listar',
                type : 'boolean',
                describe: 'Mostrar la tabla en la consola',
                default : false
            },
            'l_b' : {
                alias : "limitBase",
                type : 'number',
                describe: 'Cantidad de filas a calcular',
                default : 10
            },
        })
        .check( (argv , options) => {
            if(isNaN(argv.b)){
                throw new Error('La base tiene que ser un numero')
            }

            return true
        })
        .argv

module.exports = argv