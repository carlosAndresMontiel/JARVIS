import express, { Request, Response } from 'express';
import cors from 'cors'

import 'dotenv/config'
const port = process.env.PORT || 3000;

// uncomment bellow to import user routes
//import userRoutes from './routes/userRoutes.js'

const app = express();

app.use(cors())
app.use(express.json())

// uncomment bellow to enable user routes
//app.use('/user', userRoutes)

//test your API here
app.get('/', (req, res) => {
  res.json({ message: 'Up and running!!!' });
});
 
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});