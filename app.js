/* se puede utilizar de cualquiera de las dos maneras, me parece mejor la comentada */
//const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];

//console.log(argv.base + ' ' + argv.limite);
//console.log(argv2);


let comando = argv._[0];
switch (comando) {
    case 'listar':
        //console.log('comando listar');
        listarArchivo(argv.base, argv.limite)
            .then(data => {
                console.log(" == tabla de multiplicar ==".green);
                console.log(` == base ${ argv.base } y límite ${ colors.red(argv.limite) } ==`.green);

                console.log(`${ data } `)
            })
            .catch(err => { console.log(err); });
        break;

    case 'crear':
        //console.log('comando crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ colors.green(archivo) } `))
            .catch(err => { console.log(err).red; });
        break;
    default:
        console.log(`comando ${ comando } No reconocido`);
        break;
}