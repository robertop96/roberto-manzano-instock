const router = require("express").Router();
const deleteInventory = require("./deleteInventory");
const inventoryFunctionExample = require("./deleteInventory");

router.get("/", inventoryFunctionExample);
router.delete("/:id", deleteInventory);
module.exports = router;
