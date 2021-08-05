const fs = require('fs');
const template = require('../../helpers/template');
const write = require('../../helpers/writeFile');
const check = require('../../helpers/isCheck');
const wareHousesLocation = __dirname + '/../../data/warehouses.json';
const validator = require('validator');

const addWarehouse = (req, res) => {
  try {
    const templatedBody = template.warehouse(req.body);
    if (
      !check.isEmpty(req.body) &&
      validator.isMobilePhone(req.body.phone + '') &&
      validator.isEmail(req.body.email + '')
    ) {
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
    } else res.json('Invalid input');
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = addWarehouse;
