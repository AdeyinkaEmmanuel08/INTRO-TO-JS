let correctPin = "1234";
let attempts = 0;
let userTypedPin = "9999";

while (attempts < 3) {
  if (userTypedPin === correctPin) {
    console.log("Access Granted. Welcome back!");
    break;
  } else {
    attempts++;
    console.log("Wrong PIN. Try again.");
  }
}

if (attempts === 3) {
  console.log("Access Denied. Account Locked.");
}
