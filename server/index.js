require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const routes = require('./routes');
const app = express();
const morgan = require('morgan');

const warehouse = require('./controllers/warehouseControllers');
const inventory = require('./controllers/inventoryControllers');

morgan('dev');
app.use(express.json());
app.use('/', routes);

app.get('/try/:id', inventory.getInventory);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
