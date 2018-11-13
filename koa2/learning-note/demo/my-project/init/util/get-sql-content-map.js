const fs = require('fs')
const getSqlMap = require('./get-sql-map')

let sqlContentMap = {}
let getSqlContentMap = function() {
    let sqlMap = getSqlMap()
    for (let sqlName in sqlMap) {
        let sqlPath = sqlMap[sqlName]
        let sqlContent = fs.readFileSync(sqlPath, 'binary')
        sqlContentMap[sqlName] = sqlContent
    }
    console.log('sqlContentMap is: ', sqlContentMap)
    return sqlContentMap

}

module.exports = getSqlContentMap

