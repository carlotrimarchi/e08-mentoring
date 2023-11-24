/*
JavaScript data types:

Primitive data types:
- number
- string
- boolean
- null
- undefined
- BigInt (we are not going to use it)
- Symbol (we are not going to use it)

Object data types:
- object
- array
- regular expression
- ...



NaN is a number
*/

/* 
- The boolean data type is used to represent truthness or falseness
- it has only 2 possible values:
	- true
	- false
*/
let isProductFavourite = true;
let hasDeal = true;

let productName = "Stan Smith";
let productType = "shoes";
let productPrice = 100;
let isDiscounted = true;

/*
I want to write an if statement to check if there is a discount
If there is a discount, we decrease the price by 50%
*/

// if (isDiscounted === true)
if (isDiscounted) {
	productPrice = productPrice / 2;
	// productPrice /= 2;
}

console.log("Product price:", productPrice);
