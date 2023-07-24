
const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
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
