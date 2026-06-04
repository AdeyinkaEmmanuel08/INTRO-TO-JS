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
