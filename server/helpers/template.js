const uniqid = require('uniqid');
const id = uniqid();

const warehouse = (object) => {
  return {
    id: id,
    name: object.name,
    address: object.address,
    city: object.city,
    country: object.country,
    contact: {
      name: object.cname,
      position: object.position,
      phone: object.phone,
      email: object.email
    }
  };
};

const editWarehouse = (object) => {
  return {
    name: object.name,
    address: object.address,
    city: object.city,
    country: object.country,
    contact: {
      name: object.cname,
      position: object.position,
      phone: object.phone,
      email: object.email
    }
  };
};

const inventory = (obj) => {
  return {
    id: id,
    warehouseID: obj.warehouseID,
    warehouseName: obj.warehouseName,
    itemName: obj.itemName,
    description: obj.description,
    category: obj.category,
    status: obj.status,
    quantity: obj.quantity
  };
};

const editItem = (object) => {
  return {
    itemName: object.itemName,
    description: object.description,
    category: object.category,
    status: object.status,
    warehouse: object.warehouse,
    quantity: object.quantity || 0
  };
};

module.exports = { warehouse, editWarehouse, inventory, editItem };
