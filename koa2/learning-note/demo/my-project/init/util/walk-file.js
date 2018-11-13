const fs = require('fs')

let walkFile = function(basePath, mime) {
    let fileList = {}

    let files = fs.readdirSync(basePath)
    console.log('files is: ', files)

    for (let [index, item] of files.entries()) {
        let itemArr = item.split('\.')
        let itemMime = itemArr.length > 1 ? itemArr[itemArr.length - 1] : undefined
        if (mime === itemMime) {
            fileList[item] = basePath + item
        }
    }

    console.log('fileList is: ', fileList)
    return fileList

}

module.exports = walkFile

