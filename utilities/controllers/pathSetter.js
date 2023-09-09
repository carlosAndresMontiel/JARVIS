const { promptProjectName, promptPortNumber, promptDatabaseType } = require('../services/prompt')

const currentDirectory = process.cwd()

const setDirectories = async () => {
    const folderName = await promptProjectName()
    const toProject = `${currentDirectory}\\${folderName}`
    const portNumber = await promptPortNumber()
    const databaseType = await promptDatabaseType()
    const toSrc = `${toProject}\\src`
    const toTemplates = `${currentDirectory}\\utilities\\templates`
    return ({
        'toProject': toProject,
        'portNumber': portNumber,
        'databaseType': databaseType,
        'toSrc': toSrc,
        'toTemplates': toTemplates
    })
}
module.exports = {
    setDirectories
}