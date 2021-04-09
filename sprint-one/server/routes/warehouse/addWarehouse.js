const fs = require('fs');
const template = require('../../helpers/template');
const write = require('../../helpers/writeFile');
const wareHousesLocation = __dirname + '/../../data/warehouses.json';

const addWarehouse = (req, res) => {
  try {
    const templatedBody = template.warehouse(req.body);
    fs.readFile(wareHousesLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const warehouseData = JSON.parse(data);
        warehouseData.push(templatedBody);
        write.writeFile(wareHousesLocation, warehouseData);
        res.send(templatedBody);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = addWarehouse;
