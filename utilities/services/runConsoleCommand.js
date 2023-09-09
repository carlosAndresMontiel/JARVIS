const { exec } = require('child_process')  

const runConsoleCommand = (initCommand, packageName) => {
  return new Promise((resolve, reject) => {
    exec(initCommand, (error, stdout, stderr) => {
      if (error) {
        reject(`Error initializing ${packageName}: ${error}`)
      } else {
        console.log(stdout)
        if (stderr) {
          console.error(stderr)
        }
        resolve(console.log(`${packageName} successfully initiated`))
      }
    })
  })
}
module.exports = {
  runConsoleCommand
}




















