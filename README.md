
#JARVIS

The system requests in the terminal the name of the project, the port number to run the API and the database type to use.

The system uses the previous info to create the next directory:

-- ProjectName 

--- --- src

--- --- controllers

--- --- routes

--- --- middlewares

--- --- --- errors

--- --- --- validations

This project is now capable of installing the next dependencies:
- Express.js
- Dotenv
- Cors
  
And also install the following dev dependencies:
- Prisma
- TypeScript
- @types/express
- @types/cors
- Nodemon
- ts-node-dev
  
And it initiates Prisma client, TypeScript and a git repository.

Then, the system edits the .env file to include the port number requested before, and includes some configurations in the .gitignore file.

Finally a basic API file is added to the src folder.
