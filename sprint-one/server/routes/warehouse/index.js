const router = require("express").Router();
const functionExample = require("./functionExample");
const addWarehouse = require("./addWarehouse");
const WarehouseDetails = require("./WarehouseDetails");
const warehouseList = require("./warehouseList");
const addWarehouse = require("./addWarehouse");
const editWarehouse = require("./editWarehouse");

router.get("/", functionExample);
router.get("/:id", WarehouseDetails);
router.post("/", addWarehouse);
router.put("/:id", editWarehouse);
router.get("/list", warehouseList);

module.exports = router;
