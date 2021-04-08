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

module.exports = { warehouse, editWarehouse };
