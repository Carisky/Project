import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
