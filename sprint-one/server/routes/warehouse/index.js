const router = require('express').Router();
const functionExample = require('./functionExample');
const warehouseList = require('./warehouseList')

router.get('/', functionExample);
router.get('/list', warehouseList);

module.exports = router;
