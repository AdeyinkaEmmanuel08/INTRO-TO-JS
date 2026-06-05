// Count backwards from 10 to 1, then log "Blast off!"
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");

// Calculate the sum of all numbers between 1 and 20 (inclusive)
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("The sum is:", sum);

// FizzBuzz from 1 to 15
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
