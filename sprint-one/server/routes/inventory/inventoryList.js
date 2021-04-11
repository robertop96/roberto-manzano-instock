fs = require('fs');
const data = require('../../data/inventories.json');

const inventoryList = (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = inventoryList;
