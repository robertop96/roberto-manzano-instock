const router = require("express").Router();
const functionExample = require("./functionExample");
const addWarehouse = require("./addWarehouse");
const WarehouseDetails = require("./WarehouseDetails");

router.get("/", functionExample);
router.get("/:id", WarehouseDetails);
router.post("/", addWarehouse);

module.exports = router;
