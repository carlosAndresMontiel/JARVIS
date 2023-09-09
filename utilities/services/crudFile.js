const fs = require('fs')
const path = require('path')

const copyFileTo = (sourceFilePath, destinationFilePath)  => {
  return new Promise((resolve, reject) => {
    fs.copyFile(sourceFilePath, destinationFilePath, (error) => {
      error
      ?reject(`Error trying to copi the file: ${error}`)
      :resolve()
    })
  })
}

const writeToFile = (filePath, contentToWrite) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, contentToWrite, (error) => {
      error
      ?reject(`Error trying to write in ${filePath}: ${error}`)
      :resolve()
    })
  })
}

const readFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, content) => {
      error
      ?reject(`Error reding the file ${filePath}: ${error}`)
      :resolve(content)
    })
  })
}

const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      error
      ?reject(`Error trying to delete ${filePath}: ${error}`)
      :resolve()
    })
  })
}

module.exports = {
  readFileContent,
  copyFileTo,
  writeToFile,
  deleteFile
}