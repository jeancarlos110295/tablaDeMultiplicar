console.clear()
let base = null
let listar = null
let limitBase = null

const { getTablaMulti } =  require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

base = argv.base
listar = argv.listar
limitBase = argv.l_b

/*const [ dirNodeBin , dirProyect , parametroBase] = process.argv
console.log(`Ruta de Node: ${dirNodeBin}`)
console.log(`Ruta del Proyecto: ${dirProyect}`)
const [ parametroName , baseParametro] = parametroBase.split("=")
console.log(baseParametro)*/

getTablaMulti(base , listar , limitBase)
    .then( nombreArchivo => {
        console.log( colors.red(nombreArchivo) , colors.green.underline('Creado'))
    })
    .catch( err => {
        //console.log(Object.getOwnPropertyNames(err))
        console.log(err.message)
    })

