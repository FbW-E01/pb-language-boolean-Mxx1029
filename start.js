// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
// * Which comparison operator should we generally use? Why?
// * What would happen if we were to use `=`?
console.log(3 == "3");
console.log(3 === "3");
// Loose comparison is possible, as it converts the string into a number and then compares both expressions
// With strict comparison the types of the expression will be compared first, so they can't be equal
// we should always use the strict comparison as it is much more concise and type safe
// a single equal is an assignment operator and would get an error as there is no variable keyword or name mentioned

// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.
const one = true;
console.log(one ? !one : "Something didn't work");

// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

// ```javascript
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
// it will print the assigned value, which is "Stacey". the name variable got assigned the string "Stacey" because the givenName variable evaluates to falsy, as it is undefined

