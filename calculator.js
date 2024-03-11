// Declare and initialize display value
// Represents content displayed on screen (before/after equal sign click) (appendable)
let display_Value = '';

// Declare and initialize numbers 1 and 2 and result
let number_1 = '';
let number_2 = '';

// Represents final solution of all operations
let solution = 0;

// Select display screen
const SCREEN = document.getElementById("screen");

// Select all digit buttons
const DIGITS = document.querySelectorAll(".digit");

// Select all signs
const SIGNS = document.querySelectorAll(".sign");

// Loop through each digit button, adding a click event listener
DIGITS.forEach(function(digit) {
  // Invoke function upon click
  digit.addEventListener("click", function() {
  
    // Append to Number 1
    number_1 = number_1 + digit.innerHTML;

    // Append Number 1 to display_Value
    display_Value = number_1;

    // Display display_Value on screen
    SCREEN.innerHTML = display_Value;
  });
});

// Declare add function
const add = function(num_1, num_2) {
    return num_1 + num_2;
  };
  
// Declare subtract function
const subtract = function(num_1, num_2) {
  return num_1 - num_2;
};
  
// Declare multiply function
const multiply = function(num_1, num_2) {
  return num_1 * num_2;
};
  
// Declare divide function
const divide = function(num_1, num_2) {
  return num_1 / num_2;
};
  
// Declare operate function
const operate = function(num_1, num_2, operator) {
  
  // Determine addition
  if (operator === "+") {
    return add(num_1, num_2);
  }

  // Determine subtraction
  else if (operator === "-") {
    return subtract(num_1, num_2);
  }

  // Determine multiplication
  else if (operator === "*") {
    return multiply(num_1, num_2);
  }

  // Determine division
  else if (operator === "/") {
    return divide(num_1, num_2);
  }
  
};