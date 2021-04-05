fs = require('fs');

const functionExample = (req, res) => {
  try {
    res.send('<h1> Request received!!! </h1>');
    console.log('received');
  } catch (error) {
    console.log(error);
  }
};

module.exports = functionExample;
