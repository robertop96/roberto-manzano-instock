const isEmpty = (obj) => {
  for (const key in obj) {
    if (obj[key] === '') {
      return true;
    }
  }
  return false;
};

export default isEmpty;
