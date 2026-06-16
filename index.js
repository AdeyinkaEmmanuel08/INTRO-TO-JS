function calculateDogAges(puppyAge) {
  let dogAge = puppyAge * 7;
  console.log("Your doggie is " + dogAge + " years old in dog years!");
}

calculateDogAges(1);
calculateDogAges(3);
calculateDogAges(5);

function calculateDogAge(puppyAge, rate) {
  let dogAge = puppyAge * rate;
  console.log("Your doggie is " + dogAge + " years old in dog years!");
}

calculateDogAge(1, 7);
calculateDogAge(3, 7);
calculateDogAge(5, 7);

function calcCircumfrence(radius) {
  let circumference = 2 * 3.142 * radius;
  console.log("The circumference is " + circumference);
}

function calcArea(radius) {
  let area = 3.142 * radius * radius;
  console.log("The area is " + area);
}

calcCircumfrence(5);
calcCircumfrence(10);

calcArea(5);
calcArea(10);
