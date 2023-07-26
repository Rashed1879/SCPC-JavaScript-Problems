function romanToInteger(romanDigit) {
	const romanValues = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let integer = 0;

	for (let i = 0; i < romanDigit.length; i++) {
		const currentDigit = romanDigit[i];
		const nextDigit = romanDigit[i + 1];

		if (romanValues[currentDigit] < romanValues[nextDigit]) {
			integer -= romanValues[currentDigit];
		} else {
			integer += romanValues[currentDigit];
		}
	}

	return integer;
}
console.log(romanToInteger('IX'));
console.log(romanToInteger('XXI'));
console.log(romanToInteger('IV'));
console.log(romanToInteger('XCIX'));
