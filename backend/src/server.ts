import express from 'express';
import dotenv from 'dotenv';
import corsMiddleware from './middlewares/corsMiddleware';

dotenv.config();

const app = express();
const port = process.env.PORT; 

app.use(corsMiddleware);

app.get('/api/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
