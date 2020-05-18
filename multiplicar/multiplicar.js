const fs = require('fs');
const colors = require('colors');

let data = "";


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base "  ${ base }" NO es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (` ${ base } * ${ i } = ${ base * i } \n`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }-limite-${ limite }.txt`, data, (err) => {
            if (err) {
                reject(` Hubo un error al grabar el archivo -> ${ err }`.red)
            } else {
                resolve(`tabla-${ base }-limite-${ limite }.txt`);
            }
        });


    });
}

let listarArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base "${ base }" NO es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${  colors.green(base) } * ${ colors.red.underline(i) } = ${ colors.inverse(base * i) } \n`);
        }

        resolve(data);

    });

}



module.exports = {
    crearArchivo,
    listarArchivo
}