const { readFileContent, copyFileTo, writeToFile, deleteFile} = require('../services/crudFile')

const editFiles = async (path) => {
    indexSourcePath = `${path.toTemplates}/index.ts`
    indexDestinationPath = `${path.toSrc}/index.ts`
    await copyFileTo(indexSourcePath, indexDestinationPath)

    gitIgnoreDestinationPath = `${path.toSrc}/.gitignore`
    gitIgnoreSourcePath = `${path.toTemplates}/gitIgnoreContent.js`
    contentToWrite = await readFileContent (gitIgnoreSourcePath)
    await writeToFile(gitIgnoreDestinationPath, contentToWrite)

    dotEnvFileDestinationPath = `${path.toSrc}/.env`
    infoToWrite = `\nPORT=${path.portNumber}`
    await writeToFile(dotEnvFileDestinationPath, infoToWrite)
}

module.exports = { editFiles }
