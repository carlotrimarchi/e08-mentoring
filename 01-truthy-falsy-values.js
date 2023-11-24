/* 
There are values that when used in certain contexts, JavaScript
interprets as boolean.

For example, if we put a string inside the parenthesis of an if condition,
javascript will use it as a boolean:
- an empty string will mean false
- any other string will mean true

Falsy values:
"", 0, 0n, -0, null, undefined, NaN

Truthy values:
every value that is not falsy
For example: 1, 2, 3, -1, -2, "hello", "123"
*/

/* 
Let's imagine we have a website where users can sign up with their email,
a password and optionally they could choose a username.

If they choose a username, the website greets them with "Hello, <username>!"
If they don't choose a username, the website will simply greet them with "Hello, dear guest"
*/

let username = "";

if (username) {
	console.log(`Hello, ${username}`);
} else {
	console.log("Hello, dear guest");
}

if (!username) {
	console.log("Hello, dear guest");
} else {
	console.log(`Hello, ${username}`);
}

/* 
The same examples as above, but without relying on truthy and falsy values
*/
if (username !== "") {
	console.log(`Hello, ${username}`);
} else {
	console.log("Hello, dear guest");
}

if (username === "") {
	console.log("Hello, dear guest");
} else {
	console.log(`Hello, ${username}`);
}



let firstName = null;

if (!firstName) {
	console.log("Plese, enter a valid username.")
}