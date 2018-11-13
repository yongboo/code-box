const mysql = require('mysql')
const config = require('../../config')
const dbConfig = config.database

const pool = mysql.createPool({
    host     :  dbConfig.HOST,
    user     :  dbConfig.USERNAME,
    password :  dbConfig.PASSWORD,
    database :  dbConfig.DATABASE
})

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function( err, connection ) {
            if ( err ) {
                console.log(' db pool connection err: ', err)
                resolve(err)
            } else {
                connection.query(sql, values, function( err, rows ) {
                    if ( err ) {
                        console.log('sql querry err: ', err)
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

module.exports = query
