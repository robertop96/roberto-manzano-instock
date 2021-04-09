fs = require("fs");
const warehouseArray = __dirname + "/../../data/warehouses.json";
const inventoryArray = __dirname + "/../../data/inventories.json";

const warehouseDetails = (req, res) => {
  const { id } = req.params;
  fs.readFile(warehouseArray, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const warehouseData = JSON.parse(data);
      const warehouse = warehouseData.find((warehouse) => warehouse.id === id);
      fs.readFile(inventoryArray, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          const invetoryData = JSON.parse(data);
          const warehouseInventory = invetoryData.filter(
            (item) => item.warehouseID === id
          );
          res.json({ warehouse, warehouseInventory });
        }
      });
    }
  });
};

module.exports = warehouseDetails;
