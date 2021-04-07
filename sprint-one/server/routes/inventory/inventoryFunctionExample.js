fs = require('fs');

const inventoryFunctionExample = (req, res) => {
  try {
    res.send('<h1> Request received!!! </h1>');
    console.log('received');
  } catch (error) {
    console.log(error);
  }
};

module.exports = inventoryFunctionExample;
