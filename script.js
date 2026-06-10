console.log("Hello, World!");
//Variable declaration
var age;
age = 16; //variable assignment
// var alowws redeclaration of a varible
// rules for naming
/*
    1.There shouldn't be space within the variable name e.g var my AGe =17;
    2. It should not be started by special characters except _ and $ e.g var #age = 13;
    3. It should not be started with numbers e.g var 45persons = true;
    4. It should not be a reserved keyword e.g return, break, continue, var, let, const, function, if, else, switch, case, default, for, while, do, try, catch, finally, throw, class, extends, super, import, export etc.
    5.The words should not be separated with dash e.g var my-age = 17; instead we can use camelCase e.g var myAge = 17;
    
*/ 3;

var myStack = "JavaScript";
var MyAge = 89;
console.log(MyAge);
let mySchool = "University of Lagos";
// let mySchool = 'University of Lagos';
let myschool = "University of Ibadan"; //let does not allow redeclaration but allows reassignment
const myCountry = "Nigeria";
const year = 2026;
// const year = 2029;

let a = 4;
let b = 5;
let c = a * b;
console.log(c);

// let length = 34;
// let width = 45;
// let area = length * width;
// console.log(area);

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. It is assigning a value to a variable before declaring it For example:

console.log(x); // Output: undefined
var x = 5;

name = "John";
var name; //var allows hoisting, so the declaration is moved to the top, but the assignment happens at the original line. Therefore, when we log 'name' before the assignment, it returns 'undefined' instead of throwing an error.
console.log(name);

myName = "Jane";
//let does not allow hoisting, so this will throw a ReferenceError because 'myName' is not defined at the time of the console.log statement.
console.log(myName);

constant = 3.142;
//const does not allow hoisting, so this will throw a SyntaxError because 'constant' is not initialized at the time of the console.log statement.
console.log(constant);

// Scope

// global scope for var,let and const
var favArt = "Sculpture";
let myClub = "Chelsea";
const datas = "input";

{
  let myClub = "Arsenal";
  console.log(myClub); // Output: Arsenal
}

var fruit = "Mango";
{
  var fruit = "Pineapple";
}

console.log(fruit); // Output: Pineapple because var does not have block scope, it is function-scoped, so the variable 'fruit' is redeclared and reassigned within the block, affecting the outer variable.

const values = 56.24;

{
  const values = 78.9;
}

function myFunction() {
  const values = 12.34;
}

// Data Types in JavaScript
// 1. Primitive Data Types: These are basic data types that are not objects and have no methods. They include:
// - String: Represents a sequence of characters. Example: 'Hello, World!'
let myString = "color";
let double = "Another string";
let texts = "The 'beginners' course";
let anotherText = 'The "beginners" course';
let store = "The 'beginners' course";
console.log(store);
console.log(typeof myString); // to know the data type of a variable we can use typeof operator
console.log(typeof double);
console.log(typeof texts);
console.log(typeof fruit);
// - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// - Boolean: Represents a logical entity that can have two values: true or false. Example: true, false
// - Null: Represents the intentional absence of any object value. Example: null
// - Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
// - Symbol: Represents a unique identifier. Example: Symbol('description')
// - BigInt: Represents integers with arbitrary precision. Example: 9007199254740991n
// 2. Non-Primitive Data Types (Reference Types): These are complex data types that can store collections of data and more complex entities. They include:
// Object: Represents a collection of properties and methods. Example: { name: 'Alice', age: 30 }
// Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
// Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log('Hello!'); }
// Date: Represents a specific point in time. Example: new Date()
// RegExp: Represents a regular expression, which is used for pattern matching in strings. Example: /ab+c/
// Map: Represents a collection of key-value pairs. Example: new Map()
// Set: Represents a collection of unique values. Example: new Set()

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

console.log(myString + " " + double + " " + texts + " " + anotherText); // Output: color Another string The 'beginners' course The "beginners" course
console.log(typeof myString); // Output: string

// Number data type
let myNumber = 42;
let exponential = 1.5e3; // This is equivalent to 1.5 * 10^3 or 1500
let small = 23e-2; // This is equivalent to 23 * 10^-2 or 0.23
let decimal = 45.67;
console.log(myNumber); // Output: 42
console.log(exponential); // Output: 1500
console.log(small);

console.log(typeof myNumber);

let maxNum = Number.MAX_SAFE_INTEGER; // The largest representable number
let minNum = Number.MIN_SAFE_INTEGER; // The smallest representable positive number

console.log(99999999999999999); // Output: 10000000000000000 due to precision limitations of JavaScript numbers
console.log(999999999999999);
console.log(maxNum + 3); // Output: 9007199254740991
console.log(minNum); // Output: -9007199254740991

console.log(13 + 7); // Output: 20
console.log(10 - 4); // Output: 6
console.log(6 * 3); // Output: 18
console.log(20 / 5); // Output: 4
console.log(10 % 3); // Output: 1 (modulus operator gives the remainder of the division)
console.log(2 ** 3); // Output: 8 (exponentiation operator, equivalent to Math.pow(2, 3))
console.log(13 + "color"); // Output: '13color' (number is coerced to a string and concatenated)
console.log("The answer is: " + 42); // Output: 'The answer is: 42' (number is coerced to a string and concatenated)
console.log("5" * 2); // Output: 10 (string is coerced to a number and multiplied)
console.log("10" / 2); // Output: 5 (string is coerced to a number and divided)
console.log(23 + 12 + "red");
console.log("red" + 12 + 1);
console.log("red" + 12 + "blue" + 5);

// Boolean data type
let loggedIn = true;
let isLoggedIn = false;
let bool = new Boolean(true); // This creates a Boolean object, which is not the same as a primitive boolean value
console.log(bool); // Output: [Boolean: true]
console.log(loggedIn); // Output: true
console.log(isLoggedIn); // Output: false

// False values in JavaScript include:
/*
1. 0
2. ""
3. false
4.-0
5. null
6. undefined
7. NaN (Not-a-Number)
8. document.all (a legacy feature that is considered falsy)
9. Any expression that evaluates to false, such as comparisons that are not true (e.g., 5 > 10) or logical operations that result in false (e.g., true && false).
10.0n (BigInt zero)
*/
if (0) {
  console.log("This will not be printed because 0 is a falsy value.");
}

console.log(typeof isloggedIn); // Output: boolean
let myTest = "true";
console.log(typeof myTest); // Output: string

// Undefined data type -- a variable that has been declared but not assigned a value
let assigns;
console.log(assigns); // Output: undefined
console.log(typeof assigns); // Output: undefined

let val;
console.log(val);
console.log(typeof val);
let myStr = "I love food";
myStr = undefined;
let myEmpty = "";

// null
let card = null;
console.log(typeof card);

console.log(null == undefined);
console.log(null === undefined);

//Object
const car = {
  name: "Lexus",
  model: "IS250",
  color: "black",
  wheel: 4,
};
console.log(typeof car);
console.log(car.name);

//Array
const list_of_cars = ["Lexus", "BMW", "SIenna 2024"];
console.log(Array.isArray(list_of_cars));
console.log(list_of_cars instanceof Array);

//Date
let today = new Date();
console.log(today);
console.log(today.getDate);

console.log(today instanceof Date);

// 25/05/2026
let bigValue = 12356799n;
console.log(bigValue);
console.log(typeof bigValue);

let biggerVal = BigInt("90123478945");
console.log(typeof biggerVal);
let num = 78;
console.log(Number(bigValue) + num); // Output: 12356877

console.log(biggerVal / BigInt(num));
// let decimalVal = 1.5n;

let cars = ["Lexus", "Sienna", "Benz"];
console.log(cars instanceof Array);
console.log(Array.isArray(cars));

let myMaps = new Map([
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
]);
console.log(myMaps instanceof Map);

let mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet instanceof Set);

//Type coercion = is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). In JavaScript, type coercion can occur in various situations, such as when using operators or when comparing values. For example:
// String coercion
console.log("5" + 10); // Output: '510' (string concatenation due to type coercion)
console.log("yusrah" + true); // Output: yusrahtrue

// NUmber coercion
console.log(5 + null);
console.log("5" * 2); //Output will be 10 because the string "5" is coerced to a number before multiplication

// Boolean coercion
console.log(6 + true);
console.log(6 + false);
console.log(true + true);
console.log(false + true);
console.log(false + false);

console.log(true == "true"); // Output: false (boolean true is coerced to the string "true" for comparison, resulting in false)
console.log(false == "false"); // Output: false (boolean false is coerced to the string "false" for comparison, resulting in false)
console.log(true == 1); // Output: true (boolean true is coerced to the number 1 for comparison, resulting in true)
console.log(false == 0); // Output: true (boolean false is coerced to the number 0 for comparison, resulting in true)
console.log(true == 2); // Output: false (boolean true is coerced to the number 1 for comparison, resulting in false)
console.log(false == -1); // Output: false (boolean false is coerced to the number 0 for comparison, resulting in false)

console.log(5 == "5");
console.log(5 === "5");

// Type conversion
// String conversion
let num1 = "42";
console.log(Number(num1));
console.log(typeof num1);

// console.log(typeof num1); // Output: number
// let strNum = String(num1);
// console.log(strNum); // Output: '42'
// console.log(typeof strNum); // Output: string

let converted = "123";
console.log(Number(converted)); // Output: 123
let emptyStrings = "";
console.log(Number(emptyStrings)); // Output: 0 (empty string is coerced to 0 when converted to a number)
let myText = "Orange";
let newText = Number(myText);
console.log(typeof newText); // Output: NaN (Not-a-Number, because "Orange" cannot be converted to a number)

let newString = "123.45";
let parse = parseFloat(newString);
console.log(parse); // Output: 123.45 (parseFloat converts the string to a floating-point number)

let current = new Date();
let currentYear = current.getFullYear();

// let myInput = parseInt(prompt());
// const theAge = currentYear - myInput;
// console.log(theAge);

// Unary operators
let unit = "5";
let yy = +unit; // The unary plus operator converts the string "5" to the number 5
console.log(yy); // Output: 5
console.log(typeof yy);

let x1 = 5;
x1++;
console.log(x1); // Output: 6 (post-increment operator increases the value of x by 1 after returning its current value)
// Output: 5100 (final price after applying discount and tax)
// Convert discount percentage to a decimal
// The array checker
// because typeof an array returns 'object', we can use Array.isArray() to check if a variable is an array

// Number conversion(Number to a String)
let digit = 234;
let newDigit = digit.toString();
console.log(typeof newDigit);
console.log(newDigit);

let example = 901.9;
console.log(String(example)); // Output: '901.9' (the number is converted to a string)
console.log(typeof String(example)); // Output: string

// Work
let costPrice = "5000 dollars";
let discount = "0.25%";
let tax = "0.12%";
// Calculate the final price after applying discount and tax
costPrice = parseFloat(costPrice);
console.log(costPrice);
discount = parseFloat(discount) / 100;
console.log(discount);
tax = parseFloat(tax) / 100;
console.log(tax);

let finalPrice = costPrice - costPrice * discount + costPrice * tax;
// To round it off/up to 2 decimmal places(d.p)
finalPrice = finalPrice.toFixed(2);
// finalPrice = finalPrice.toexponential(2);
// console.log(finalPrice);
// let final = finalPrice.toString();
// console.log(final);
// console.log(typeof final);
// finalPrice = String(finalPrice);
// console.log(typeof finalPrice);

// Boolean conversion(Boolean to a String)
let isTrue = true;
let isFalse = false;
console.log(String(isTrue)); // Output: 'true' (the boolean value true is converted to the string 'true')
console.log(isTrue.toString()); // Output: 'true' (the boolean value true is converted to the string 'true' using the toString method)
console.log(typeof String(isTrue)); // Output: string
console.log(String(isFalse)); // Output: 'false' (the boolean value false is converted to the string 'false')

// Function to String
function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea.toString()); // Output: 'function calculateArea(length, width) { return length * width; }' (the function is converted to its source code as a string)

// Date Method
let now = Date.now();
console.log(now); // Output: 1622547800000 (the number of milliseconds since January 1, 1970, 00:00:00 UTC)

let current_date = new Date();
console.log(current_date.toString()); // Output: 'Sat May 30 2021 14:30:00 GMT+0000 (Coordinated Universal Time)' (the current date and time as a string)

const xs = [];
console.log(typeof xs);
console.log(Array.isArray(xs));

// Operators
// Arithmetic operators
// Addition operators
let f = 5;
let d = 7;
console.log(f + d); // Output: 12 (the sum of a and d)

// Subtraction operator
console.log(f - d); // Output: -2 (the difference between a and d)

// Multiplication operator
console.log(f * d); // Output: 35 (the product of a and d)

// Division operator
console.log(f / d); // Output: 0.7142857142857143 (the quotient of a divided by d)
let div = f / d;
console.log(div.toFixed(3)); // Output: 0.714 (the quotient of a divided by d, rounded to 3 decimal places)

// Modulus operator
console.log(d % f); // Output: 5 (the remainder of a divided by d)

// Exponentiation operator
console.log(f ** d); // Output: 78125 (a raised to the power of d)
let power = Math.pow(f, d); // Output: 78125 (a raised to the power of d using the Math.pow function)

// Increment operator
a = a + 1; // This is the same as a++
a++; // This is the post-increment operator, which increases the value of a by 1 after returning its current value
console.log(a); // Output: 6 (the value of a is increased by 1)
let count = 10;
count++;
console.log(count); // Output: 11 (the value of count is increased by 1)

// Assignment
// (Exercise1)
let ay = 20;
let by = 4;

let add = ay + by; // 24
let minus = ay - by; // 16
let multiply = ay * by; // 80
let dividing = ay / by;

console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);

// (Exercise 2)
let numx = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstNamex = "Frodo";
let lastNamex = "Baggins";
console.log(numx + str);
console.log(numx + str2);
console.log(numx + isPresent);
console.log(firstNamex + numx);
console.log(isPresent + str);
console.log(firstNamex + lastNamex);

// (Exercise 3)
let valx = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;
console.log(valx == str3); // Output: true (number 5 is coerced to the string "5" for comparison, resulting in true)
console.log(valx === str3); // Output: false (strict equality operator does not perform type coercion, so the number 5 and the string "5" are not considered equal)
console.log(!isAwake); // Output: true (the logical NOT operator negates the boolean value of isAwake, which is false, resulting in true)
console.log("eleven" == str4 && valx >= str3); // Output: false (the string "eleven" is not equal to str4, so the entire expression evaluates to false)
console.log(!isAwake || isAwake); // Output: true (the logical OR operator returns true if at least one operand is true, and since !isAwake is true, the result is true)
console.log(0 == false); // Output: true (0 is coerced to false for comparison, resulting in true)
console.log(0 === false); // Output: false (strict equality operator does not perform type coercion, so the number 0 and the boolean false are not considered equal)
console.log(0 != false); // Output: false (0 is coerced to false for comparison, resulting in false)
console.log(0 !== false); // Output: true (strict inequality operator does not perform type coercion, so the number 0 and the boolean false are considered not equal)

// 01/06/2026

// Operator Precedence
let operation = 2 / 8 + 9 * 4 ** 2;
console.log(operation); // Output: 144.25 (the result of the expression based on operator precedence)

// Addition assignment operator
let finalScore = 18;
finalScore += 5; // This is the same as finalScore = finalScore + 5
console.log(finalScore); // Output: 23 (the value of finalScore is increased by 5)

// Subtraction assignment operator
let initialScore = 34;
initialScore -= 10; // This is the same as initialScore = initialScore - 10
console.log(initialScore); // Output: 24 (the value of initialScore is decreased by 10)

// Multiplication assignment operator

initialScore *= 2; // This is the same as initialScore = initialScore * 2
console.log(initialScore); // Output: 48 (the value of initialScore is multiplied by 2)

// Division assignment operator
initialScore /= 4; // This is the same as initialScore = initialScore / 4
console.log(initialScore); // Output: 12 (the value of initialScore is divided by 4)

// Remainder assignment operator
initialScore %= 5; // This is the same as initialScore = initialScore % 5
console.log(initialScore); // Output: 2 (the value of initialScore is updated to the remainder of initialScore divided by 5)

// Exponentiation assignment operator
initialScore **= 3;
console.log(initialScore); // Output: 8 (the value of initialScore is raised to the power of 3)

// String Assignment
let text = "The colors are";
text += " not very bright";
console.log(text);

// Comparison operators
let num1x = 56;
let num2 = 78;

console.log(num1x > num2); // Output: false (56 is not greater than 78)
console.log(num1x < num2); // Output: true (56 is less than 78)
console.log(num1x >= num2); // Output: false (56 is not greater than or equal to 78)
console.log(num1x <= num2); // Output: true (56 is less than or equal to 78)
console.log(num1x == num2); // Output: false (56 is not equal to 78)
console.log(num1x === num2); // Output: false (56 is not strictly equal to 78)
console.log(num1x != num2); // Output: true (56 is not equal to 78)
console.log(num1x !== num2); // Output: true (56 is not strictly equal to 78)
console.log(num1x !== "56"); // Output: true (56 is not strictly equal to the string "56")

// String-string comparison & String-number comparison
console.log("a" > "A"); // Output: true (string comparison is based on lexicographical order, and lowercase 'a' has a higher Unicode value than uppercase 'A')
console.log("z" < "y"); // Output: false (string comparison is based on lexicographical order, and lowercase 'z' has a higher Unicode value than lowercase 'y')
console.log("Z" < "g"); // Output: true (string comparison is based on lexicographical order, and uppercase 'Z' has a lower Unicode value than lowercase 'g')
console.log("YuSroh" < "Yusroh"); // Output: true (string comparison is based on lexicographical order, and uppercase 'Y' has a lower Unicode value than lowercase 'u')
console.log(12 < "21"); // Output: true (number 12 is coerced to the string "12" for comparison, and "12" is less than "21" in lexicographical order)
console.log("12" < "21"); // Output: true (string comparison is based on lexicographical order, and "12" is less than "21")
console.log("1234" < "2"); // Output: true (string comparison is based on lexicographical order, and "1234" is less than "2" because the first character '1' is less than '2')
let strA = "apple";
let strB = "banana";
console.log(strA > strB); // Output: false (string comparison is based on lexicographical order, and "apple" comes before "banana")
console.log(strA < strB); // Output: true (string comparison is based on lexicographical order, and "apple" comes before "banana")
console.log(strA >= strB); // Output: false (string comparison is based on lexicographical order, and "apple" comes before "banana")
console.log(strA <= strB); // Output: true (string comparison is based on lexicographical order, and "apple" comes before "banana")
console.log(strA == strB); // Output: false (the strings "apple" and "banana" are not equal)
console.log(strA === strB); // Output: false (the strings "apple" and "banana" are not strictly equal)
console.log(strA != strB); // Output: true (the strings "apple" and "banana" are not equal)
console.log(strA !== strB); // Output: true (the strings "apple" and "banana" are not strictly equal)
console.log(strA > 5); // Output: false (string "apple" is not greater than the number 5, and the comparison results in false)
console.log(strA < 5); // Output: false (string "apple" is not less than the number 5, and the comparison results in false)
console.log(strA >= 5); // Output: false (string "apple" is not greater than or equal to the number 5, and the comparison results in false)
console.log(strA <= 5); // Output: false (string "apple" is not less than or equal to the number 5, and the comparison results in false)
console.log(strA == 5); // Output: false (string "apple" is not equal to the number 5, and the comparison results in false)
console.log(strA === 5); // Output: false (string "apple" is not strictly equal to the number 5, and the comparison results in false)
console.log(strA != 5); // Output: true (string "apple" is not equal to the number 5, and the comparison results in true)
console.log(strA !== 5); // Output: true (string "apple" is not strictly equal to the number 5, and the comparison results in true)
console.log("John" > 3); // Output: false (string "John" is not greater than the number 3, and the comparison results in false)
console.log("John" < 3); // Output: false (string "John" is not less than the number 3, and the comparison results in false)
console.log("John" == 3); // Output: false (string "John" is not greater than or equal to the number 3, and the comparison results in false)

// Logical operators(AND)
console.log(true && true); // Output: true (both operands are true, so the result is true)
console.log(true && false); // Output: false (one operand is false, so the result is false)
console.log(false && true); // Output: false (one operand is false, so the result is false)
console.log(false && false); // Output: false (both operands are false, so the result is false)

// Logical operators(OR)
console.log(true || true); // Output: true (at least one operand is true, so the result is true)
console.log(true || false); // Output: true (at least one operand is true, so the result is true)
console.log(false || true); // Output: true (at least one operand is true, so the result is true)
console.log(false || false); // Output: false (both operands are false, so the result is false)

// Logical operators(NOT)
console.log(!true); // Output: false (the logical NOT operator negates the boolean value true, resulting in false)
console.log(!false); // Output: true (the logical NOT operator negates the boolean value false, resulting in true)

// Logical AND assignment operator; If the first operand is falsy, it returns the first operand; otherwise, it returns the second operand. If the first operand is truthy, it assigns the value of the second operand to the variable. If the first operand is falsy, it does not change the variable.
let aged = 56;
aged &&= "henry"; // This is the same as aged = aged && true
console.log(aged); // Output: true (since aged is a truthy value, it is assigned the value of true)

let currency = 0;
currency &&= 34;
console.log(currency); // Output: 0 (since currency is a falsy value, it remains unchanged and is assigned the value of 0)

// Logical OR assignment operator; If the first operand is truthy, it returns the first operand; otherwise, it returns the second operand. If the first operand is falsy, it assigns the value of the second operand to the variable. If the first operand is truthy, it does not change the variable.

let strs = "";
strs ||= 65;
console.log(strs); // Output: 65 (since strs is a falsy value, it is assigned the value of 65)

// Logical nullish assignment operator; If the first operand is null or undefined, it returns the second operand; otherwise, it returns the first operand. If the first operand is null or undefined, it assigns the value of the second operand to the variable. If the first operand is not null or undefined, it does not change the variable. Nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.

let balance = 0;
balance ??= 1000;
console.log(balance); // Output: 0 (since balance is not null or undefined, it remains unchanged and is assigned the value of 0)

let last = null;
last ??= "Smith";
console.log(last); // Output: 'Smith' (since last is null, it is assigned the value of 'Smith')

// Conditional Statements
let myFavColor = "red";
if (myFavColor === "red") {
  console.log("Your favorite color is red!");
}

let day = new Date();
let hour = day.getHours();
let minutes = day.getMinutes();
let time = hour + ":" + minutes;
console.log(time);

if (hour > 16) {
  console.log("Good Evening!");
} else {
  console.log("Good Day!");
}

let drivingAge = 18;
if (drivingAge >= 18) {
  console.log("You are old enough to drive!");
} else {
  console.log("You are not old enough to drive yet!");
}

let enteredPin = 1234;
let correctPin = 2345;
let accountBalance = 550;
let enteredAmount = 300;
if (enteredPin === correctPin && enteredAmount <= accountBalance) {
  console.log("Transaction successful!");
} else {
  console.log("Check your PIN or your account balance!");
}
// Nested if statements

if (enteredPin === correctPin) {
  if (enteredAmount <= accountBalance) {
    console.log("Transaction successful!");
  } else {
    console.log("Insufficient funds!");
  }
} else {
  console.log("Incorrect PIN!");
}

let country = "Nigeria";
let profession = "Engineering";
if (country === "Nigeria") {
  if (profession === "Engineering") {
    console.log("You are an engineer in Nigeria!");
  } else {
    console.log("You are not an engineer in Nigeria!");
  }
} else {
  console.log("You are not in Nigeria!");
}
if (country === "Nigeria" && profession === "Engineering") {
  console.log("You are an engineer in Nigeria!");
} else {
  console.log("You are not an engineer in Nigeria!");
}

let cartTotal = 500;
let isPremiumMember = false;
if (cartTotal >= 500 || isPremiumMember) {
  console.log("You are eligible for free shipping!");
} else {
  console.log("You are not eligible for free shipping!");
}

// let grade;
// if (grade >= 90) {
//   console.log("You got an A!");
// } else if (grade >= 80) {
//   console.log("You got a B!");
// } else if (grade >= 70) {
//   console.log("You got a C!");
// } else if (grade >= 60) {
//   console.log("You got a D!");
// } else {
//   console.log("You got an F!");
// }

// A theater offers students discounts but only on weekdays, they also offer a discount to senior citizen at any time(day of the week). Write a js code to output 1.) You qualified for a discounted ticket or a regular ticket pricing applies
// Solution to assignment
let isStudent = true;
let isSenior = true;
let dayOfWeek = "Saturday";

if (
  (isStudent && dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday") ||
  isSenior
) {
  console.log("You qualified for a discounted ticket");
} else {
  console.log("Regular ticket pricing applies");
}

// If...else...
let mathGrade = 89;
if (mathGrade >= 90) {
  console.log("A+");
} else if (mathGrade >= 80) {
  console.log("A-");
} else if (mathGrade >= 70) {
  console.log("B+");
} else if (mathGrade >= 60) {
  console.log("B-");
} else {
  console.log("Retake");
}

// Ternary Operator
let myFavFood = "Rice";

myFavFood === "Beans"
  ? console.log("You love beans!")
  : console.log("You do not love beans!"); // Output: 'You do not love beans!' (since myFavFood is not equal to 'Beans', the condition is false, and the second expression is executed)
// let foodMessage = myFavFood === 'Rice' ? 'You love rice!' : 'You do not love rice!';

// console.log(foodMessage); // Output: 'You love rice!' (since myFavFood is equal to 'Rice', the condition is true, and the first expression is returned)

let message;
let isLoggedIns = true;

let myTexts =
  isLoggedIns === true
    ? (message = "Welcome back!")
    : (message = "Please log in to continue.");
console.log(message); // Output: 'Welcome back!' (since isLoggedIn is true, the condition is true, and the first expression is executed, assigning 'Welcome back!' to message)

// Switch
let currentDay = new Date().getDay();
console.log(currentDay); // Output: 0 (Sunday), 1 (Monday), 2 (Tuesday), 3 (Wednesday), 4 (Thursday), 5 (Friday), or 6 (Saturday) depending on the current day of the week
switch (currentDay) {
  case 0:
    output = "Sunday";
    break;
  case 1:
    output = "Monday";
    break;
  case 2:
    output = "Tuesday";
    break;
  case 3:
    output = "Wednesday";
    break;
  case 4:
    output = "Thursday";
    break;
  case 5:
    output = "Friday";
    break;
  case 6:
    output = "Saturday";
    break;
  default:
    output = "It is not a day";
}
console.log(output);

let mark = 90;
let grades;
switch (true) {
  case mark >= 90:
    grades = "A+";
    break;
  case mark >= 80:
    grades = "A-";
    break;
  case mark >= 70:
    grades = "B+";
    break;
  case mark >= 60:
    grades = "B-";
    break;
  case mark >= 50:
    grades = "C+";
    break;
  case mark >= 40:
    grades = "C-";
    break;
  default:
    output = "Retake It";
}

console.log(grades);

// Loop
for (index = 0; index <= 20; index++) {
  console.log(index);
}
for (i = 0; i <= 20; i++) {
  console.log(i);
}
// class work?
// Use a for loop to print the even numbers from 0 to 20
//even numbers
for (i = 0; i <= 20; i += 2) {
  console.log(i);
}
for (i = 0; i <= 20; i++) {
  if (i % 2 === 2) {
    console.log(i);
  }
}
for (i = 0; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// Use a for loop to add A to every number from 1 to 10
for (i = 0; i <= 10; i++) {
  console.log(i + "A");
}
// Write a for loop that counts backwards from 10 to 1 and then logs blast off at the end.
// Write a for loop that calculates the sum of all numbers between 1 and 20(including 20)
// Write a for loop that iterates from number 1 to 15
// i.) for multiples of 3, log fizz instead of the number
// ii.)for multiples of 5, log buzz instead of the number
// iii.) for numbers which are multiples of both 3 and 5 log fizzbuzz
// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast off!");

// 08/06/2026
let ids = 0;
for (; ids < 5; ) {
  console.log(ids);
  ids++;
}

//local scope
var k = 2;

for (var k = 0; k < 20; k++) {
  console.log(k);
}
console.log(k);

let l = 5;
for (let l = 0; l < 20; l++) {
  console.log(l);
}
console.log(l);

// for (let units = 0; units < 15; units++) {
//     setTimeout(() => {
//         console.log(units)
//     }, 3000)
// }

//while

// let userInp = 0;

// while (userInp < 20) {
//     console.log(userInp)
//     userInp++
// }

// let currentValue = 0;
// let rollCount = 0;

// while (currentValue !== 6) {
//     currentValue = Math.floor((Math.random() * 6) + 1)
//     rollCount++

// }
// console.log('The roll count is ${rollCount}')

// let Num = 2;
// let power = 0;
// while (Num < 1000) {
//     Num *= 2;
//     power++
// }
// console.log(The power is ${power})

// let attempts = 3;
// let pin = '1234';
// let input;

// while (input !== pin) {
//     input = prompt();
//     console.log('yes')

// }

// Do......while loop
// let choice = '';

// do{
//   choice = prompt('Do you want to continue (Y/N)').toUpperCase();

// }while(choice !== 'Y' && choice !== 'N')
// console.log("Great, mpve to the next step ")

// let diceRoll;
// let times = 0;
// do{
//   diceRoll = Math.floor(Math.random() * 6 + 1);
//   times++;
// }while(diceRoll !== 1)
//   console.log(times);
//   console.log('Critical failure');

//  Break
for (let i = 0; i < 20; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

let missingBook = "Peter Pan";

let listOfBooks = [
  "The Great Gatsby",
  "To Kill a Mockingbird",
  "1984",
  "Moby",
  "Peter Pan",
  "War and Peace",
];

for (let i = 0; i < listOfBooks.length; i++) {
  if (listOfBooks[i] === missingBook) {
    console.log("Book found: " + listOfBooks[i]);
    break;
  }
  console.log(listOfBooks[i]);
}

// Continue
for (let i = 0; i < 20; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Let
// Given the list of students age, remove strings and negative values from the  array.
let studentAges = [12, 32, 10, 14, -18, "unknown", "books", -7];
for (let i = 0; i < studentAges.length; i++) {
  if (studentAges[i] < 0) {
    continue;
  } else if (typeof studentAges[i] === "string") {
    continue;
  }
  console.log(studentAges[i]);
}

// Using a while loop with break and continue
let testValue = 0;
while (testValue < 20) {
  if (testValue === 5) {
    break;
  }
  console.log(testValue);
  testValue++;
}

let testedValue = 2;
while (testedValue < 20) {
  if (testedValue % 2 === 1) {
    testedValue++;
    continue;
  }
  console.log(testedValue);
  testedValue++;
}

// Function
function area(length, width) {
  let Area = length * width;
  console.log(Area);
}
area(23, 12);

// Write a function that'll convert from faranheit to celcius and vice versa
