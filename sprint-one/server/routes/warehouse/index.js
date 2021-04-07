const router = require('express').Router();
const functionExample = require('./functionExample');
const addWarehouse = require('./addWarehouse');

router.get('/', functionExample);
router.post('/', addWarehouse);

module.exports = router;
