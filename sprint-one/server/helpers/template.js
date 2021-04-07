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
      name: object.contact.cName,
      position: object.contact.cPosition,
      phone: object.contact.cPhone,
      email: object.contact.cEmail
    }
  };
};

module.exports = { warehouse };
