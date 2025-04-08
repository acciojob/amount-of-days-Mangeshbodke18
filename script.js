//your JS code here. If required.

function daysOfAYear(a) {
  if (a % 400 === 0) {
    return 366; // Leap year
  } else if (a % 100 === 0) {
    return 365; // Not a leap year
  } else if (a % 4 === 0) {
    return 366; // Leap year
  } else {
    return 365; // Not a leap year
  }
}

console.log(daysOfAYear(500)); // Output: 365
