const {tsConfigs} = require('./tsConfigs')

const initPackageJson = `npm init --yes >> readme.txt`

const initTypescript = `npx tsc --init ${tsConfigs} >> readme.txt`

const devDependencies = `npm i typescript @types/express @types/cors prisma ts-node-dev nodemon -D >> readme.txt`

const projectDepedencies = `npm i express cors dotenv >> readme.txt`

const initPrisma = `npx prisma init --datasource-provider`

const gitInit = `git init >> readme.txt`

const runTypescriptServer = `start "ts-server" /min cmd /k "npx ts-node-dev src/index.ts"`

const runNodemonServer = `start "ts-server" /min cmd /k "npx node build/index.js"`

module.exports = {
    initPackageJson, 
    initTypescript,
    devDependencies,
    projectDepedencies,
    initPrisma,
    gitInit,
    runTypescriptServer,
    runNodemonServer
}