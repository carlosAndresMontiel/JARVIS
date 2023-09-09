const { createFolder } = require('../services/createFolder')

const createWorkingDirectory = async (workingDirectory) => {
    await createFolder(workingDirectory)
    await createFolder(`${workingDirectory}\\src`)
    await createFolder(`${workingDirectory}\\src\\controllers`)
    await createFolder(`${workingDirectory}\\src\\middlewares`)
    await createFolder(`${workingDirectory}\\src\\middlewares\\validations`)
    await createFolder(`${workingDirectory}\\src\\middlewares\\errors`)
    await createFolder(`${workingDirectory}\\src\\routes`)
}

module.exports = {createWorkingDirectory}