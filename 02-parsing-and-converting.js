/* 
In JavaScript we have a series of tools (functions and methods) that let us
convert a value from one data type to another

A common use case for this is converting a number to a string, or a string to
a number
*/

/* 
Parsing vs Converting

Converting: 
- we try to go from one data type to another
- we take the entire value of a data type and try to convert it all into another
- for example: we take a string and try to convert it as it is into a number
	- Number("123") -> 123
	- Number("123.456") -> 123.456
	- Number("123abc") -> NaN

Parsing: 
- we try to go from one data type to another
- for example, from a string to a number
- the action of parsing is to scan the string, one character at a time, from 
left to right
- as long as a character is a valid number, parsing move forward
- when it meets a character that is not a valid number, it stops

- parseInt("123") -> 123
- parseInt("123abc") -> 123
- parseInt("abc123456") -> NaN
- parseFloat("123.456") -> 123.456
- parseFloat("123.456abc") -> 123.456
- parseFloat("abc123.456") -> NaN
*/

console.log('parseInt("123")', parseInt("123"));
console.log('parseInt("123abc")', parseInt("123abc"));
console.log('parseInt("abc")', parseInt("abc"));
console.log('Number("123abc")', Number("123abc"));

// convert a string to a number by using the + in front of it
console.log('+"123"', +"123");

// concatenate an empty string to a number to convert the number to a string
console.log('"" + 123', "" + 123);


let price = "19$";
parseFloat(price);


