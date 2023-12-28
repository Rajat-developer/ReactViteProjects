require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hey rajat this side!');
});
app.get('/twitter', (req, res) => {
    res.send('rajat.com!');
  });

app.listen(process.env.port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
