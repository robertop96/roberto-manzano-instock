const fs = require('fs');
const template = require('../../helpers/template');
const write = require('../../helpers/writeFile');
const inventoryLocation = __dirname + '/../../data/inventories.json';

const addInventory = (req, res) => {
  try {
    const templatedBody = template.inventory(req.body);
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
  } catch (err) {
    console.log(err);
  }
};

module.exports = addInventory;
