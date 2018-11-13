
const getSqlContentMap = require('./util/get-sql-content-map')
const query = require('./util/db')

// 打印脚本执行日志
const eventLog = function( err , sqlFile, index ) {
    if( err ) {
      console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
    } else {
      console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
    }
  }

let sqlContentMap = getSqlContentMap()

const createAllTables = async () => {
    for (let sqlName in sqlContentMap) {
        let sqlRows = sqlContentMap[sqlName]
        sqlRows = sqlRows.split(';')
        for (let [index, shell] of sqlRows.entries()) {
            if (shell.trim()) {
                let result = await query(shell)
                if (result.serverStatus * 1 === 2) {
                    eventLog(null, sqlName, index)
                } else {
                    eventLog(true, sqlName, index)
                }
            }

        }
    }
    console.log('sql脚本执行结束！')
    console.log('请按 ctrl + c 键退出！')
}

createAllTables()
