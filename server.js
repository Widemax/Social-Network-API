const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',routes);

db.once('open', () => {
  console.log('Connected to the database');
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });