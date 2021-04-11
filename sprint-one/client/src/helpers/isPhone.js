var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const isPhone = (subjectString) => {
  if (phoneRegex.test(subjectString)) {
    return true;
  } else return false;
};

export default isPhone;
