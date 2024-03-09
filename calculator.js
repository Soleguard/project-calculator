// Declare and initialize display value
let display_Value = '';

// Select display screen
const screen = document.getElementById("screen");

// Select all digit buttons
const digits = document.querySelectorAll(".digit");

// Loop through each digit button, adding a click event listener
digits.forEach(function(digit) {
  // Invoke add_Value function upon click
  digit.addEventListener("click", add_Value);
});

// Create function for adding a value to display screen
function add_Value(e) {
  // Set display value to digit value
  // Error: Returns "undefined"
  // Expected Result: HTML text of button (ex. 1)
  display_Value = e;
  screen.innerHTML = display_Value;
};

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