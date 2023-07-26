function findMostFrequentElement(arr) {
	const countOfElements = arr.reduce((obj, element) => {
		obj[element] = (obj[element] || 0) + 1;
		return obj;
	}, {});

	let mostFrequentElement;
	let max = 0;

	for (const element in countOfElements) {
		if (countOfElements[element] > max) {
			max = countOfElements[element];
			mostFrequentElement = element;
		}
	}

	return mostFrequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findMostFrequentElement(inputArray);
console.log(output);
