const router = require('express').Router();
const deleteInventory = require('./deleteInventory');
const inventoryFunctionExample = require('./deleteInventory');
const addInventory = require('./addInventory');

router.get('/', inventoryFunctionExample);
router.post('/', addInventory);
router.delete('/:id', deleteInventory);
module.exports = router;
