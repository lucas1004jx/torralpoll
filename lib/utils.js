const objectToArray = (obj) => {
  return Object.keys(obj).map(key => obj[key]).filter(value => !!value);
};

const utils = {
  objectToArray
}

export default  utils;
