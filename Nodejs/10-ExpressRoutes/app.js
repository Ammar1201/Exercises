const express = require('express');

const app = express();

app.get('/numbers', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.post('/numbers', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.put('/numbers', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.delete('/numbers', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});