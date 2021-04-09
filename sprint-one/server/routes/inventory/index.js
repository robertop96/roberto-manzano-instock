const router = require('express').Router();
const deleteInventory = require('./deleteInventory');
const inventoryFunctionExample = require('./deleteInventory');
const addInventory = require('./addInventory');
const inventoryList = require('./inventoryList')

router.get('/list', inventoryList);
router.get('/', inventoryFunctionExample);
router.post('/', addInventory);
router.delete('/:id', deleteInventory);
module.exports = router;
