const router = require('express').Router();
const warehouse = require('./warehouse');

router.use('/api/warehouse', warehouse);

module.exports = router;
