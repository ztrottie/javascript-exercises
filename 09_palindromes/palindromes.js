
const palindromes = function (str) {
	const regex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
	let cleanStr = str.replace(regex, '').toLowerCase();
	let reverseString = cleanStr.split("").reverse().join('');
	return (cleanStr === reverseString);
};

// Do not edit below this line
module.exports = palindromes;
