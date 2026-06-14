function checkEntry(age, isVIP) {
  if (isVIP === true) {
    console.log("Access Granted: Welcome VIP!");
  } else if (age < 21) {
    console.log("Access Denied: Too young!");
  } else {
    console.log("Access Granted: Enjoy the night!");
  }
}
