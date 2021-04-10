const router = require("express").Router();
const deleteInventory = require("./deleteInventory");
const inventoryFunctionExample = require("./deleteInventory");
const addInventory = require("./addInventory");
const inventoryList = require("./inventoryList");
const editInventory = require("./editInventory");

router.get("/list", inventoryList);
router.get("/", inventoryFunctionExample);
router.post("/", addInventory);
router.put("/:id", editInventory);
router.delete("/:id", deleteInventory);
module.exports = router;
