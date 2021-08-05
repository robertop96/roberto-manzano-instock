const router = require("express").Router();
const warehouse = require("./warehouse");
const inventory = require("./inventory");

router.use("/api/warehouses", warehouse);
router.use("/api/inventory", inventory);

module.exports = router;
