require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
// const PORT = 5050;
const morgan = require('morgan');

const knex = require('knex')(require('./knexfile').development);

morgan('dev');
app.use(express.json());
app.use('/', routes);

console.log(process.env.DB_NAME);

app.get('/try', (req, res) => {
  knex
    .select('*')
    .from('inventories')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.send('Error getting warehouses data'));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
