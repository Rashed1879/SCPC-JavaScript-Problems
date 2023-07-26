function findSecondSmallest(arr) {
	const sortedArray = arr.sort((a, b) => a - b);
	const secondSmallest = sortedArray[1];
	return secondSmallest;
}

const inputArray = [5, 8, 3, 10, 2, 15];
const secondSmallest = findSecondSmallest(inputArray);
console.log(secondSmallest);
