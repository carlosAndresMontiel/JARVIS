const  Command = require('../templates/commands') 
const {runConsoleCommand} = require('../services/runConsoleCommand')

const runServers = async (projectPath) => {
    await runConsoleCommand(`cd ${projectPath} && ${Command.runTypescriptServer}`, 'TypeScript-server')
    await runConsoleCommand(`cd ${projectPath} && ${Command.runNodemonServer}`, 'Nodemon-server')
}

module.exports = { runServers }
