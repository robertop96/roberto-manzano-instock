<<<<<<< HEAD
const router = require("express").Router();
const deleteInventory = require("./deleteInventory");
const inventoryFunctionExample = require("./deleteInventory");
const addInventory = require("./addInventory");
const editInventory = require("./editInventory");

router.get("/", inventoryFunctionExample);
router.post("/", addInventory);
router.put("/:id", editInventory);
router.delete("/:id", deleteInventory);

=======
const router = require('express').Router();
const deleteInventory = require('./deleteInventory');
const inventoryFunctionExample = require('./deleteInventory');
const addInventory = require('./addInventory');
const inventoryList = require('./inventoryList')

router.get('/list', inventoryList);
router.get('/', inventoryFunctionExample);
router.post('/', addInventory);
router.delete('/:id', deleteInventory);
>>>>>>> 0038d180deb9e94e3926c59a482b77d11dcec31c
module.exports = router;
