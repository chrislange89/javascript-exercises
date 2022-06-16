const removeFromArray = function(inputArray, ...args) {
  return inputArray.filter(e => !args.includes(e));
};

module.exports = removeFromArray;
