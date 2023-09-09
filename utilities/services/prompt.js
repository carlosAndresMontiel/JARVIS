const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const promptProjectName = () => {
  return new Promise((resolve) => {
    rl.question('Type in the name of the new project\n', (answer) => {
      resolve(answer)
    })
  })
}

const promptPortNumber = () => {
  return new Promise((resolve) => {
    rl.question('Type in the port number\n', (answer) => {
      const portNumber = parseInt(answer)
      isNaN(portNumber)
      ?resolve(3000)
      :resolve(portNumber)
    })
  })
}

const promptDatabaseType = () => {
  return new Promise((resolve) => {
    const databaseOptions = [
      'sqlite',
      'postgresql',
      'mysql',
      'sqlserver',
      'mongodb',
      'cockroachdb',
    ]
    const optionsText = databaseOptions.map((option, index) => `${index + 1}. ${option}`).join(' || ')
    console.log(`Choose a number according to the database you will use:\n${optionsText}`)

    rl.question('Opción: ', (answer) => {
      const optionIndex = parseInt(answer)
      isNaN(optionIndex) || optionIndex < 1 || optionIndex > databaseOptions.length
      ?resolve('sqlite')
      :resolve(databaseOptions[optionIndex - 1])
    })
  })
}

module.exports = {
  promptProjectName,
  promptPortNumber,
  promptDatabaseType,
}
