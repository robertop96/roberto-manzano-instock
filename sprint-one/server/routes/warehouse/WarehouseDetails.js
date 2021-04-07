fs = require("fs");
const warehouseArray = require("../../data/warehouses.json");
const inventoryArray = require("../../data/inventories.json");

const warehouseDetails = (req, res) => {
  console.log(warehouseArray);
  const { id } = req.params;
  const warehouse = warehouseArray.find((element) => element.id === id);
  const warehouseInventory = inventoryArray.filter(
    (item) => item.warehouseId === id
  );

  res.json({ warehouse, warehouseInventory });
};

module.exports = warehouseDetails;
