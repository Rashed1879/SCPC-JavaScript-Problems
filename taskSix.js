function generateRandomPassword(length) {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?';

	let password = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}

	return password;
}
const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
