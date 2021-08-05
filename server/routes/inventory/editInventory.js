const fs = require('fs');
const inventoryArray = __dirname + '/../../data/inventories.json';
const template = require('../../helpers/template.js');
const write = require('../../helpers/writeFile');
const check = require('../../helpers/isCheck');

const editInventory = (req, res) => {
  const { id } = req.params;
  try {
    const bodyTemplate = template.editItem(req.body);
    if (!check.isEmpty(bodyTemplate)) {
      fs.readFile(inventoryArray, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const itemData = JSON.parse(data);
          const itemChange = itemData.find((item) => item.id === id);
          Object.assign(itemChange, bodyTemplate);
          write.writeFile(inventoryArray, itemData);
          res.send(itemChange);
        }
      });
    } else res.json('Invalid input');
  } catch (error) {
    console.log(error);
  }
};

module.exports = editInventory;
