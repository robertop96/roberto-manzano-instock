fs = require('fs');
const data= require('../../data/inventories.json')

const inventoryList = (req, res) => {
  try {
    res.send(JSON.stringify(data));
    console.log('received2');
  } catch (error) {
    console.log(error);
  }
};

module.exports = inventoryList;