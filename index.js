function truncate_string(str, num) {
  if (!str) return "";

  return str.slice(0, num);
}

// Test Data
console.log(truncate_string("Robin Singh", 4));

// function capitalize(str) {
//   if (str.length === 0) return "";

//   let firstLetter = str[0].toUpperCase();
//   let restOfString = "";

//   for (let i = 1; i < str.length; i++) {
//     restOfString += str[i];
//   }

//   return firstLetter.concat(restOfString);
// }

// // Test Data
// console.log(capitalize("js string exercises"));

// function capitalize_Words(str) {
//   if (str.length === 0) return "";

//   let words = str.split(" ");
//   let finalResult = "";

//   for (let i = 0; i < words.length; i++) {
//     let currentWord = words[i];

//     if (currentWord.length > 0) {
//       let firstLetter = currentWord[0].toUpperCase();
//       let restOfWord = "";

//       for (let j = 1; j < currentWord.length; j++) {
//         restOfWord += currentWord[j];
//       }

//       let fullWord = firstLetter.concat(restOfWord);

//       finalResult += fullWord;

//       if (i < words.length - 1) {
//         finalResult += " ";
//       }
//     }
//   }

//   return finalResult;
// }

// // Test Data
// console.log(capitalize_Words("js string exercises"));

// function camelize(str) {
//   if (str.length === 0) return "";

//   let words = str.split(" ");
//   let finalResult = "";

//   for (let i = 0; i < words.length; i++) {
//     let currentWord = words[i];

//     if (currentWord.length > 0) {
//       let firstLetter = currentWord[0].toUpperCase();
//       let restOfWord = "";

//       for (let j = 1; j < currentWord.length; j++) {
//         restOfWord += currentWord[j];
//       }

//       finalResult = finalResult.concat(firstLetter, restOfWord);
//     }
//   }

//   return finalResult;
// }

// // Test Data
// console.log(camelize("JavaScript Exercises")); // Output: "JavaScriptExercises"
// console.log(camelize("JavaScript exercises")); // Output: "JavaScriptExercises"
// console.log(camelize("JavaScriptExercises")); // Output: "JavaScriptExercises"

// // function calculateDogAges(puppyAge) {
// //   let dogAge = puppyAge * 7;
// //   console.log("Your doggie is " + dogAge + " years old in dog years!");
// // }

// // calculateDogAges(1);
// // calculateDogAges(3);
// // calculateDogAges(5);

// // function calculateDogAge(puppyAge, rate) {
// //   let dogAge = puppyAge * rate;
// //   console.log("Your doggie is " + dogAge + " years old in dog years!");
// // }

// // calculateDogAge(1, 7);
// // calculateDogAge(3, 7);
// // calculateDogAge(5, 7);

// // function calcCircumfrence(radius) {
// //   let circumference = 2 * 3.142 * radius;
// //   console.log("The circumference is " + circumference);
// // }

// // function calcArea(radius) {
// //   let area = 3.142 * radius * radius;
// //   console.log("The area is " + area);
// // }

// // calcCircumfrence(5);
// // calcCircumfrence(10);

// // calcArea(5);
// // calcArea(10);
