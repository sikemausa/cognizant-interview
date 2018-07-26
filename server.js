/* eslint no-console: 0 */

const express = require('express');

const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const apiKey = require('./config.js').WEATHER_KEY;

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/weather', (req, res) => {
  const lat = req.body.lat;
  const lon = req.body.lon;
  const endpoint = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;
  axios.get(endpoint).then(response => res.send(response.data));
});

app.get('*', (request, response) => {
  response.sendFile(__dirname, './dist/index.html');
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err);
    console.log(err.message);
  }
  next();
});

app.listen(process.env.PORT || 3000, () => {
  app.emit('listening');
  console.log('listening on 3000');
});
