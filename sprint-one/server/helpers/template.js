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
      name: object.contact.name,
      position: object.contact.position,
      phone: object.contact.phone,
      email: object.contact.email
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
      name: object.contact.name,
      position: object.contact.position,
      phone: object.contact.phone,
      email: object.contact.email
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
module.exports = { warehouse, editWarehouse, inventory };
