/* 
NaN - NotANumber

- NaN is a special value
- its type is actually "number"
- we get NaN as a result when we perform numerical operations that
can't produce a valid number as a result
- for example, if we try to convert the string "hello" to a number

There are five different types of operations that return NaN:

- Failed number conversion (e.g. explicit ones like parseInt("blabla"), Number(undefined), or implicit ones like Math.abs(undefined))
- Math operation where the result is not a real number (e.g. Math.sqrt(-1))
- Indeterminate form (e.g. 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)
- A method or expression whose operand is or gets coerced to NaN (e.g. 7 ** NaN, 7 * "blabla") — this means NaN is contagious
- Other cases where an invalid value is to be represented as a number (e.g. an invalid Date new Date("blabla").getTime(), "".charCodeAt(1))

from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
*/

parseInt("bla"); // NaN
NaN + 2; // NaN

/* 
Knowing that some operations can result in NaN, our goal is to learn how to deal with it
properly

We need a way to check if a value is NaN

- NaN is never equal to itself
- it means that we can't use regular comparison operators with it
*/

let number = parseInt("hello");

console.log(number);
// this doesn't work
console.log(number === NaN); //false

/* 
We have 2 ways for checking if a value is NaN

- Number.isNaN()
- isNaN()

- Number.isNaN() has a more predictable behaviour and it's easier to use
- Number.isNaN() checks if the value in parenthesis is NaN
- it returns true or false
*/

console.log('Number.isNaN(NaN)', Number.isNaN(NaN)); // true
console.log('Number.isNaN(123)', Number.isNaN(123)); // false
console.log('Number.isNaN("abc")', Number.isNaN("abc")); // false

let convertedNumber = Number("123");
console.log('Number.isNaN(convertedNumber)', Number.isNaN(convertedNumber)); // false


let convertedNumber2 = Number("abc"); // Number("abc") -> NaN
console.log('Number.isNaN(convertedNumber2)', Number.isNaN(convertedNumber2)); // true



/* 
isNaN()

- isNaN() does 2 things
- first, isNaN() tries to convert the value in parenthesis to a number
- then, it checks if the result of this conversion is NaN or not
*/

// first, isNaN tries to convert the string "abc" to a number 
// it can't, so the result will be NaN
// at this point, it checks if NaN is actually NaN, which is true
console.log('isNaN("abc")', isNaN("abc")); // true