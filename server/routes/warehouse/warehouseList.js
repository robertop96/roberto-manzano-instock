fs = require('fs');
const data = require('../../data/warehouses.json');

const warehouseList = (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = warehouseList;
