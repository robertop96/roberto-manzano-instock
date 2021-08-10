require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const routes = require('./routes');
const app = express();
const morgan = require('morgan');
const Warehouse = require('./models/Warehouse');
const Contact = require('./models/Contact');

const controllers = require('./controllers/warehouseControllers');

morgan('dev');
app.use(express.json());
app.use('/', routes);

app.get('/try/:id', controllers.getWarehouse);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
