const fs = require('fs')
// fs.readFile('./package.json', (err, data) => {
//   if (err) return console.log(err)
//   data = JSON.parse(data)
//   console.log(data.name)
// })

// ------------------------------
// function readFile (filePath) {
//   let promise = new Promise((resolve, reject) => {
//     fs.readFile(filePath, (err, data) => {
//       if (err) reject(err)
//       resolve(data)
//     })
//   })
//   return promise
// }

// readFile('./package.json')
// .then((data) => {
//   data = JSON.parse(data)
//   console.log(data.name)
// })
// .catch((err) => {
//   console.log(err)
// })

// ------------------------------
const util = require('util')
util.promisify(fs.readFile)('./package.json')
  .then(JSON.parse)
  .then(data => {
    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  })

