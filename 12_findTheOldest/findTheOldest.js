const findTheOldest = function(Peoples) {
	return Peoples.reduce((oldestPerson, currentPerson) => {
		const today = new Date;
		console.log (today);
		let currentPersonDeath = currentPerson.yearOfDeath ??= today.getFullYear();
		let oldestPersonDeath = oldestPerson.yearOfDeath ??= today.getFullYear();
		let currentPersonAge = currentPersonDeath - currentPerson.yearOfBirth;
		let oldestPersonAge = oldestPersonDeath - oldestPerson.yearOfBirth;
		return ((currentPersonAge < oldestPersonAge) ? oldestPerson : currentPerson)
	}, Peoples[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
