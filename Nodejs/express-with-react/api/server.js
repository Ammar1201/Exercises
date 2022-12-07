import express, { json } from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const PORT = 5000;
const app = express();

app.use(json());
app.use(cors());

app.get('/current?:city', async (req, res) => {
  try {
    const { city } = req.query;
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=794c127444ab46f8a84163836220712&q=' + city);
    const data = await response.json();
    res.status(200).send(JSON.stringify(data));
  }
  catch (err) {
    res.status(404).send(err);
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log('server listening on port ' + PORT);
})