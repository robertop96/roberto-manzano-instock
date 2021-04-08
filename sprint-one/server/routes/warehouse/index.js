const router = require('express').Router();
const functionExample = require('./functionExample');
const addWarehouse = require('./addWarehouse');
const editWarehouse = require('./editWarehouse');

router.get('/', functionExample);
router.post('/', addWarehouse);
router.put('/:id', editWarehouse);

module.exports = router;
