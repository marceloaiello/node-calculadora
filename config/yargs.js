const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Lista las tablas de multiplicar', opts)
    .command('crear', 'crea tablas especificada en la base --base', opts)
    .help()
    .argv;


module.exports = {
    argv
}