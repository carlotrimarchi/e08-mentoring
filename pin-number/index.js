/*
Task 2
Write a program that asks the user to enter a PIN (Personal Identification Number, like a password, made only of numbers).

The rules for a valid PIN are:

- it must contain only numbers (digits from 0 to 9)
- it should be 4 digits long
After asking the user to choose a PIN the program should print one of two messages:

ERROR: the pin you entered is not valid:
 if the PIN has not the right length or contains non valid digits
Thank you. The pin you chose was saved correctly.: if the PIN is valid
Bonus
There are cases where some characters, like -, + and . are also accepted.

Test your solution with these inputs and make sure that they are NOT considered valid:

-123
+123
12.3
*/

const input = "1234";
const number = Number(input);

const isValidNumber = Number.isNaN(number) === false;
const hasLength4 = input.length === 4;
const doesNotContainDash = !input.includes("-");
const doesNotContainPlus = !input.includes("+");
const doesNotContainDot = !input.includes(".");

const isValidPin =
	isValidNumber &&
	hasLength4 &&
	doesNotContainDash &&
	doesNotContainPlus &&
	doesNotContainDot;

// option 1
if (isValidPin) {
	console.log("Thank you. The pin you chose was saved correctly");
} else {
	console.log("ERROR: the pin you entered is not valid");
}

// option 2
if (
	isValidNumber &&
	hasLength4 &&
	doesNotContainDash &&
	doesNotContainPlus &&
	doesNotContainDot
) {
	console.log("Thank you. The pin you chose was saved correctly");
} else {
	console.log("ERROR: the pin you entered is not valid");
}

// option 3
if (
	Number.isNaN(number) === false &&
	input.length === 4 &&
	!input.includes("-") &&
	!input.includes("+") &&
	!input.includes(".")
) {
	console.log("Thank you. The pin you chose was saved correctly");
} else {
	console.log("ERROR: the pin you entered is not valid");
}

console.log();

// nodemon