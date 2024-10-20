const sumAll = function(firstValue, secondValue) {
	let total = 0;
	if (firstValue < 0 || secondValue < 0 || !Number.isInteger(firstValue) || !Number.isInteger(secondValue))
		return "ERROR"
	let sumStart = (firstValue < secondValue) ? firstValue : secondValue;
	let sumEnd = (secondValue > firstValue) ? secondValue : firstValue;
	while (sumStart <= sumEnd) {
		total += sumStart;
		sumStart++;
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
