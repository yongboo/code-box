
const walkFile = require('./walk-file')

const getSqlMap = function() {
    let baseDir = __dirname
    console.log('baseDir is: ', baseDir)
    baseDir = baseDir.replace('/\\/g', '\/')

    let baseArr = baseDir.split('\/')
    baseArr = baseArr.slice(0, baseArr.length - 1)
    baseDir = baseArr.join('/') + '/sql/'

    let fileList = walkFile(baseDir, 'sql')
    return fileList
}

module.exports = getSqlMap


