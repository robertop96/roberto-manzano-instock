const router = require("express").Router();
const functionExample = require("./functionExample");
const addWarehouse = require("./addWarehouse");
const { warehouse } = require("../../helpers/template");

router.get("/", functionExample);
router.post("/", addWarehouse);

module.exports = router;
