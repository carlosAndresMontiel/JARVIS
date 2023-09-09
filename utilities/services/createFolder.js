const fs = require('fs')

const createFolder = (directoryName) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(directoryName, (error) => {
      error
      ?reject(`An error occured creating the folder: ${error}`)
      :resolve()
    })
  })
}
module.exports = {
  createFolder
}
