const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en la consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'hasta las interacciones de la multiplicación'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número"
        }
        return true;
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw "El hasta debe ser un número"
        }
        return true;
    })
    .argv;

module.exports = argv;