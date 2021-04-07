const router = require('express').Router();
const inventoryFunctionExample = require('./inventoryFunctionExample');

router.get('/', inventoryFunctionExample);

module.exports = router;
