const fs = require("fs");
const inventoryArray = __dirname + "/../../data/inventories.json";
const template = require("../../helpers/template.js");
const write = require("../../helpers/writeFile");

const editInventory = (req, res) => {
  const { id } = req.params;
  try {
    const bodyTemplate = template.editItem(req.body);
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
  } catch (error) {
    console.log(error);
  }
};

module.exports = editInventory;
