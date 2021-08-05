const fs = require('fs');
const data = require('../../data/warehouses.json');
const wareHousesLocation = __dirname + '/../../data/warehouses.json';
const write = require('../../helpers/writeFile');

const deleteWarehouse = (req, res) => {
  try {
    fs.readFile(wareHousesLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const warehouseData = JSON.parse(data);
        const del = warehouseData.filter(
          (warehouse) => warehouse.id !== req.params.id
        );
        write.writeFile(wareHousesLocation, del);
        res.json(del);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteWarehouse;
