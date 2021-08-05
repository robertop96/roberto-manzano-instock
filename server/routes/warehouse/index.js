const router = require('express').Router();
const addWarehouse = require('./addWarehouse');
const WarehouseDetails = require('./WarehouseDetails');
const warehouseList = require('./warehouseList');
const editWarehouse = require('./editWarehouse');
const deleteWarehouse = require('./deleteWarehouse');

router.get('/list/all', warehouseList);
router.get('/:id', WarehouseDetails);
router.post('/', addWarehouse);
router.put('/:id', editWarehouse);
router.delete('/:id', deleteWarehouse);

module.exports = router;
