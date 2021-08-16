const router = require('express').Router();
const deleteInventory = require('./deleteInventory');
const inventoryFunctionExample = require('./deleteInventory');
const addInventory = require('./addInventory');
const inventoryList = require('./inventoryList');
const editInventory = require('./editInventory');
const inventoryItemDetails = require('./inventoryItemDetails');

router.get('/', inventoryList);
router.get('/:id', inventoryItemDetails);
router.post('/', addInventory);
router.put('/:id', editInventory);
router.delete('/:id', deleteInventory);
module.exports = router;
