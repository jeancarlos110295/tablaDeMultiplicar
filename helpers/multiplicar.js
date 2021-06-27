const fs = require('fs')
const colors = require('colors')

const getTablaMulti = async ( number , listar, limit) => {
    try{    
        const rutaStorage = `./storage/tabla-${number}.txt`

        let tablaText = `
        \r==================================
            Tabla del : ${number} hasta el ${limit}
        \r==================================
        `
        let consoleText = tablaText
    
        for(let i = 1; i <= limit; i++){
            tablaText += `\r${number} x ${i} = ${number * i} \n`

            consoleText += `\r${number} ${ colors.green('x') } ${i} ${ colors.green('=') } ${number * i} \n`
        }
        
        fs.writeFileSync( rutaStorage , tablaText)

        if(listar){
            console.log(colors.gray(consoleText))
        }

        return `Ubicación del archivo: ${rutaStorage}`
    }catch(err){
        throw err
    }
}

module.exports = {
    getTablaMulti
}