const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        if (listar) {
            console.log("========================".green)
            console.log("      TABLA DEL ".green, colors.blue(base))
            console.log("========================".green)
        }
        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {

            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`
        }

        listar ? console.log(consola) : null;

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {

        throw error;
    }

}

module.exports = {
    crearArchivo
}