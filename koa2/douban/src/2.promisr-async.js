const fs = require('fs')
const util = require('util')
const readAsync = util.promisify(fs.readFile)

async function read(filePath) {
  try {
    let data = await readAsync(filePath)
    data = JSON.parse(data)
    console.log(data.name)
  } catch (err) {
    console.log(err)
  }
}

read('./package.json')