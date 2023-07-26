function reverseString(str) {
	let reversedString = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i];
	}
	return reversedString;
}

const string = 'hello world';
const outputString = reverseString(string);
console.log(outputString);
