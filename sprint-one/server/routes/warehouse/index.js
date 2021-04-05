const router = require('express').Router();
const functionExample = require('./functionExample');

router.get('/', functionExample);

module.exports = router;
