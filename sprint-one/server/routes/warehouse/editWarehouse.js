const fs = require('fs');
const wareHousesLocation = __dirname + '/../../data/warehouses.json';
const template = require('../../helpers/template.js');
const write = require('../../helpers/writeFile');
const check = require('../../helpers/isCheck');
const validator = require('validator');

const editWarehouse = (req, res) => {
  try {
    const templatedBody = template.editWarehouse(req.body);
    if (
      !check.isEmpty(req.body) &&
      check.isPhone(req.body.phone) &&
      validator.isEmail(req.body.email + '')
    ) {
      fs.readFile(wareHousesLocation, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const warehouseData = JSON.parse(data);
          const foundWarehouse = warehouseData.find(
            (warehouse) => warehouse.id == req.params.id
          );
          console.log(foundWarehouse)
          Object.assign(foundWarehouse, templatedBody);
          write.writeFile(wareHousesLocation, warehouseData);
          res.send(foundWarehouse);
        }
      });
    } else res.json('Invalid input');
  } catch (error) {
    console.log(error);
  }
};

module.exports = editWarehouse;
