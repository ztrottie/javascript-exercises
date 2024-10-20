const repeatString = function(string, amount) {
	let finalString = '';

	if (amount < 0)
		return "ERROR"
	for (let i = 0; i < amount; i++) {
		finalString += string;
	}
	return finalString;
};

// Do not edit below this line
module.exports = repeatString;
