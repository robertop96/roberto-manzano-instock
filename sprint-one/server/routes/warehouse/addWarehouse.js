const fs = require('fs');
const template = require('../../helpers/template');
const write = require('../../helpers/writeFile');
const wareHousesLocation = __dirname + '/../../data/warehouses.json';

// console.log(write.writeFile);

const addWarehouse = (req, res) => {
  try {
    const warehouseObj = req.body;
    fs.readFile(wareHousesLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const receivedWareHouses = JSON.parse(data);
        receivedWareHouses.push(template.warehouse(warehouseObj));
        write.writeFile(wareHousesLocation, receivedWareHouses);
        res.send(template.warehouse(warehouseObj));
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = addWarehouse;
