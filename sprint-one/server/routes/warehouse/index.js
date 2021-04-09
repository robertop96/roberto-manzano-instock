const router = require("express").Router();
const functionExample = require("./functionExample");
const addWarehouse = require("./addWarehouse");
const WarehouseDetails = require("./WarehouseDetails");
const warehouseList = require("./warehouseList");
const editWarehouse = require("./editWarehouse");

router.get("/list/all", warehouseList);

router.get("/:id", WarehouseDetails);
router.post("/", addWarehouse);
router.put("/:id", editWarehouse);

router.get("/", functionExample);

module.exports = router;
