fs = require('fs');
const data= require('../../data/warehouses.json')

const warehouseList = (req, res) => {
  try {
    res.send(JSON.stringify(data));
    console.log('received1');
  } catch (error) {
    console.log(error);
  }
};

module.exports = warehouseList;