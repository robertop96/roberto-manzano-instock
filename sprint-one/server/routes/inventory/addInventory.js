const fs = require('fs');
const { checkServerIdentity } = require('tls');
const template = require('../../helpers/template');
const write = require('../../helpers/writeFile');
const inventoryLocation = __dirname + '/../../data/inventories.json';
const check = require('../../helpers/isCheck');

const addInventory = (req, res) => {
  try {
    const templatedBody = template.inventory(req.body);
    if (!check.isEmpty(req.body)) {
      fs.readFile(inventoryLocation, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const inventoryData = JSON.parse(data);
          inventoryData.push(templatedBody);
          write.writeFile(inventoryLocation, inventoryData);
          res.send(templatedBody);
        }
      });
    } else res.json('Invalid input');
  } catch (err) {
    console.log(err);
  }
};

module.exports = addInventory;
