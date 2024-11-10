const add = function(nb1, nb2) {
	return nb1 + nb2;
};

const subtract = function(nb1, nb2) {
	return nb1 - nb2;
};

const sum = function(array) {
	const sum = array.reduce((total, current) => {
    return total += current;
  }, 0);
  return sum;
};

const multiply = function(array) {
  const sum = array.reduce((total, current) => {
    return total *= current;
  }, 1);
  return sum;
};

const power = function(nb1, exponent) {
	return nb1 ** exponent;
};

const factorial = function(nb) {
  let total = 1;
	while (nb > 1) {
    total *= nb;
    nb--;
  }
  return total;
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
