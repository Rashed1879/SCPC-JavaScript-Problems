function findTwoNumbersWithSum(arr, target) {
	let first = 0;
	let second = 1;

	while (second < arr.length) {
		const sum = arr[first] + arr[second];

		if (sum === target) {
			return [first, second];
		} else if (sum < target) {
			second++;
		} else {
			first++;
			second = first + 1;
		}
	}

	return 'No such pair is found';
}
const inputArray = [1, 3, 6, 8, 11, 15];
const target = 9;
const indices = findTwoNumbersWithSum(inputArray, target);
console.log(indices);
