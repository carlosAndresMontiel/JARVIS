const { initializeProject } = require('./utilities/controllers/initializer')
const { setDirectories } = require('./utilities/controllers/pathSetter')
const { createWorkingDirectory } = require('./utilities/controllers/workingDirectoryCreator')
const { editFiles } = require('./utilities/controllers/fileEditor')

const start = async () => {
  
  try {
    const path = await setDirectories()

    await createWorkingDirectory(path.toProject)

    await initializeProject(path.toSrc, path.databaseType)

    await editFiles(path)

    //await runServers(path.toProject)

    console.log('\n¡¡¡The project has been initiaized!!!\nHave fun')
 }catch (error) {
    console.error('Error:', error)
  } finally {
    process.exit(0)
  
}}
start()
