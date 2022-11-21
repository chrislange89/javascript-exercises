const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(items) {
	return (items.length === 0) ? 0 : items.reduce((current, accumulator) => {
    return current + accumulator;
  })
};

const multiply = function(items) {
  return items.reduce((current, accumulator) => {
    return current * accumulator;
  })
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
