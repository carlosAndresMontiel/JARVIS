const  Command = require('../templates/commands') 
const {runConsoleCommand} = require('../services/runConsoleCommand')

const initializeProject = async (projectPath, databaseType) => {

  await runConsoleCommand(`cd ${projectPath} && ${Command.initPackageJson}`, 'Package.json')
  await runConsoleCommand(`cd ${projectPath} && ${Command.devDependencies}`, 'Development dependencies')
  await runConsoleCommand(`cd ${projectPath} && ${Command.projectDepedencies}`, 'Project dependencies')
  await runConsoleCommand(`cd ${projectPath} && ${Command.initTypescript}`, 'TypeScript')
  await runConsoleCommand(`cd ${projectPath} && ${Command.initPrisma} ${databaseType} >> readme.txt`, 'Prisma')
  await runConsoleCommand(`cd ${projectPath} && ${Command.gitInit}`, 'Git repository')
}

module.exports = { initializeProject }