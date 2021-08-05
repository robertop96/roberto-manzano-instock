const isEmpty = (obj) => {
  for (const key in obj) {
    if (obj[key] === '') {
      return true;
    }
  }
  return false;
};

var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const isPhone = (subjectString) => {
  if (phoneRegex.test(subjectString)) {
    return true;
  } else return false;
};

console.log(isPhone('+1 (646) 123-1234'));

module.exports = { isEmpty, isPhone };
