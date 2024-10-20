const removeFromArray = function(array, ...args) {
	for (const arg of args) {
		let index = array.indexOf(arg);
		while (index >= 0) {
			if (index > 0)
				array = array.slice(0, index).concat(array.slice(index + 1));
			else
				array = array.slice(1);
			index = array.indexOf(arg);
		}
	}
	return array
};

// Do not edit below this line
module.exports = removeFromArray;
