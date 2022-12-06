const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.post('/', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.put('/', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.delete('/', (req, res) => {
  res.send(`Successful ${req.method} request`);
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});