
// function iterator (arr) {
//   if (!Array.isArray(arr)) return console.log('Array is required') 
//   let currentIdx = 0
//   const len = arr.length
//   if (currentIdx < len) {
//     return {
//       next: () => {
//         return {
//           value: arr[currentIdx++],
//           done: false
//         }
//       }
//     }
//   } else {
//     return {
//       next: () => { done : true}
//     }
//   }

// }

// let it = iterator(['1', '2', '3'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

function *makeIterator (arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

let gen = makeIterator(['1', '2', '3'])
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())