const allConfig = require('./../../config')
const config = allConfig.database
const mysql = require('mysql')

let pool = mysql.createPool({
    host     :  config.HOST,
    user     : config.USERNAME,
    password : config.PASSWORD,
    database : config.DATABASE
})

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }

        })
    })
}

let insertData = function (table, values) {
    let _sql = 'INSERT INTO ?? SET ?'
    return query(_sql, [table, values])
}

let select = function(table, keys) {
    let _sql = 'SELECT ?? FROM ??'
    return query(_sql, [keys, table])
}



module.exports = {
    query,
    insertData,
    select
}