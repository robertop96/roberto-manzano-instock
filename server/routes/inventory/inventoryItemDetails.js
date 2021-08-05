const fs = require("fs");
const inventoryItemsLocation = __dirname + "/../../data/inventories.json";

const inventoryItemDetails = (req, res) => {
  const { id } = req.params;
  fs.readFile(inventoryItemsLocation, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const inventoryItemData = JSON.parse(data);
      const requestedItem = inventoryItemData.find(
        (inventoryItem) => inventoryItem.id === id
      );
      res.json(requestedItem);
    }
  });
};

module.exports = inventoryItemDetails;
