const objectToArray = (obj) => {
  return Object.keys(obj).map(key => obj[key]).filter(value => !!value);
};

const isCreater = (userEmail, createdByEmail) => userEmail === createdByEmail; 

const utils = {
  objectToArray,
  isCreater
};

export default  utils;
