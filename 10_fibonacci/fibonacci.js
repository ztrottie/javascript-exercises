const fibonacci = function(amount) {
	let array = [0, 1];
	if (amount < 0)
			return "OOPS"
	if (amount < 2)
		return array[amount];
	for (let i = 0; i < amount - 1; i++) {
		let newNumber = array.reduce((partialSum, a) => partialSum + a, 0);
		array.shift();
		array.push(newNumber);
	}
	return (array[1]);
};

// Do not edit below this line
module.exports = fibonacci;
