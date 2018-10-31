function getSyncTime () {
  return new Promise((resolve, reject) => {
    try {
      let startTime = new Date().getTime()
      setTimeout(() => {
        let endTime = new Date().getTime()
        let time = endTime - startTime
        resolve(time)
      }, 1000)
    } catch (err) {
      reject(err)
    }
  })
}

async function getSyncDate() {
  let date = await getSyncTime()
  console.log('startTime - endTime ', date)
}

getSyncDate()