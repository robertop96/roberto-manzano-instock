const fs = require('fs');
const wareHousesLocation = __dirname + '/../../data/warehouses.json';
const template = require('../../helpers/template.js');
const write = require('../../helpers/writeFile');

const editWarehouse = (req, res) => {
  try {
    const templatedBody = template.editWarehouse(req.body);
    fs.readFile(wareHousesLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const warehouseData = JSON.parse(data);
        const foundWarehouse = warehouseData.find(
          (warehouse) => warehouse.id === req.params.id
        );
        Object.assign(foundWarehouse, templatedBody);
        write.writeFile(wareHousesLocation, warehouseData);
        res.send(foundWarehouse);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = editWarehouse;
