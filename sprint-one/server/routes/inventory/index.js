const router = require("express").Router();
const deleteInventory = require("./deleteInventory");
const inventoryFunctionExample = require("./deleteInventory");
const addInventory = require("./addInventory");
const editInventory = require("./editInventory");

router.get("/", inventoryFunctionExample);
router.post("/", addInventory);
router.put("/:id", editInventory);
router.delete("/:id", deleteInventory);

module.exports = router;
