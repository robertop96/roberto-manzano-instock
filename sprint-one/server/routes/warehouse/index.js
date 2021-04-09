const router = require('express').Router();
const functionExample = require('./functionExample');
const warehouseList = require('./warehouseList')

router.get('/', functionExample);
router.get('/list', warehouseList);
const addWarehouse = require('./addWarehouse');
const editWarehouse = require('./editWarehouse');

router.get('/', functionExample);
router.post('/', addWarehouse);
router.put('/:id', editWarehouse);

module.exports = router;
