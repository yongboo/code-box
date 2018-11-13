
const fs = require('fs')

;(function(){
    let baseDir = __dirname
    let baseArr = baseDir.split('/')
    baseDir = baseArr.slice(0, baseArr.length - 1)
    console.log( baseDir.join('/') + '/sql/')

    let files = fs.readdirSync('./init/util/')
    console.log(files)

})()