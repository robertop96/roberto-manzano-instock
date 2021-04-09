fs = require("fs");
const write = require("../../helpers/writeFile");

const inventory = __dirname + "/../../data/inventories.json";
const deleteInventory = (req, res) => {
  fs.readFile(inventory, (err, data) => {
    const newArray = JSON.parse(data).filter(
      (item) => item.id !== req.params.id
    );
    write.writeFile(inventory, newArray);
  });
  res.json("deleted object");
};

module.exports = deleteInventory;
