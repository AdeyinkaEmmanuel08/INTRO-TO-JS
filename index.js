function checkEntry(age, isVIP) {
  if (isVIP === true) {
    console.log("Access Granted: Welcome VIP!");
  } else if (age < 21) {
    console.log("Access Denied: Too young!");
  } else {
    console.log("Access Granted: Enjoy the night!");
  }
}

// // Converting Fahrenheit to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//   let celsius = ((fahrenheit - 32) * 5) / 9;
//   console.log(celsius);
// }

// // Converting Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   console.log(fahrenheit);
// }

// // Example calls
// fahrenheitToCelsius(100); // logs 37.78
// celsiusToFahrenheit(0); // logs 32
